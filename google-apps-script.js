/**
 * RAMA SKILL ACADEMY - BLOG CMS DATABASE
 * 
 * Instructions:
 * 1. Paste this entire script into your Google Apps Script editor (Extensions -> Apps Script).
 * 2. Set your custom ADMIN_SECRET_TOKEN below.
 * 3. Run the initializeDatabase() function once to build the tables.
 * 4. Deploy as a Web App (Execute as: Me, Who has access: Anyone).
 * 5. Copy the Web App URL and configure it in your frontend admin panel.
 */

// --- CONFIGURATION ---
const SPREADSHEET_ID = '16YULDTkBtfU9SihczuyMgAxFJhNAEDDpg3ploY6SGA';

// Set a strong, secret token here. This acts as your admin password for API requests.
// You will enter this exact token in your website's Admin Panel to log in.
const ADMIN_SECRET_TOKEN = 'RamaAdmin2026!'; // CHANGE THIS BEFORE DEPLOYING!

// --- DATABASE INITIALIZATION ---
function initializeDatabase() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  // 1. Articles Tab
  const articlesHeaders = [
    'id', 'title', 'slug', 'excerpt', 'content', 'featuredImage', 'imageAlt', 
    'category', 'tags', 'author', 'seoTitle', 'metaDescription', 'focusKeyword', 
    'canonicalUrl', 'status', 'publishDate', 'updatedDate', 'createdDate'
  ];
  setupSheet(ss, 'Articles', articlesHeaders);
  
  // 2. Categories Tab
  const categoriesHeaders = ['id', 'name', 'slug', 'description', 'status', 'createdDate'];
  const categoriesSheet = setupSheet(ss, 'Categories', categoriesHeaders);
  
  // Add initial categories if empty
  if (categoriesSheet.getLastRow() <= 1) {
    const initialCategories = [
      'Data Analytics', 'AI', 'Digital Marketing', 'Web Development', 
      'Graphic Design', 'SAP', 'BFSI', 'Career', 'Education', 'Technology'
    ];
    const catData = initialCategories.map((name, i) => [
      'CAT-' + Utilities.getUuid().substring(0,6).toUpperCase(), 
      name, 
      generateSlug(name), 
      '', 
      'Active', 
      new Date().toISOString()
    ]);
    categoriesSheet.getRange(2, 1, catData.length, catData[0].length).setValues(catData);
  }

  // 3. Settings Tab
  const settingsHeaders = ['setting', 'value'];
  const settingsSheet = setupSheet(ss, 'Settings', settingsHeaders);
  
  if (settingsSheet.getLastRow() <= 1) {
    const initialSettings = [
      ['siteName', 'Rama Skill Academy'],
      ['siteUrl', 'https://ramaskillacademy.com/'],
      ['adminEmail', 'ramaskillacademy@gmail.com'],
      ['defaultAuthor', 'Rama Skill Academy'],
      ['postsPerPage', '10'],
      ['defaultCategory', 'Education']
    ];
    settingsSheet.getRange(2, 1, initialSettings.length, 2).setValues(initialSettings);
  }

  // 4. Media Tab
  const mediaHeaders = ['id', 'url', 'filename', 'altText', 'type', 'uploadedDate', 'status'];
  setupSheet(ss, 'Media', mediaHeaders);

  // Clean up default "Sheet1" if it exists and is untouched
  const sheet1 = ss.getSheetByName('Sheet1');
  if (sheet1 && ss.getSheets().length > 1) {
    ss.deleteSheet(sheet1);
  }
}

function setupSheet(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  
  // Check headers
  const existingHeaders = sheet.getLastRow() > 0 ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  if (existingHeaders.join(',') !== headers.join(',')) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    
    // Auto-resize columns
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
      // Give content columns more width
      if (['content', 'excerpt'].includes(headers[i-1])) {
        sheet.setColumnWidth(i, 400);
      }
    }
  }
  return sheet;
}

// --- API ROUTING ---

function doGet(e) {
  return handleRequest(e, 'GET');
}

function doPost(e) {
  return handleRequest(e, 'POST');
}

function handleRequest(e, method) {
  try {
    const action = e.parameter.action;
    
    // Read operations (publicly accessible if no token provided, but restricted by status)
    if (action === 'getArticles') return getArticles(e);
    if (action === 'getArticle') return getArticle(e);
    if (action === 'getCategories') return getCategories();
    
    // Write operations require Authentication
    const token = e.parameter.token || (e.postData && JSON.parse(e.postData.contents).token);
    if (token !== ADMIN_SECRET_TOKEN) {
      return jsonResponse({ success: false, error: 'Unauthorized' }, 401);
    }
    
    if (action === 'verifyLogin') return jsonResponse({ success: true });
    if (action === 'createArticle') return createArticle(JSON.parse(e.postData.contents));
    if (action === 'updateArticle') return updateArticle(JSON.parse(e.postData.contents));
    if (action === 'deleteArticle') return deleteArticle(e.parameter.id);
    
    return jsonResponse({ success: false, error: 'Unknown action' }, 400);
  } catch (error) {
    return jsonResponse({ success: false, error: error.message }, 500);
  }
}

function jsonResponse(data, code = 200) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output; // CORS headers are handled by Google Apps Script automatically for Web Apps
}

// --- API CONTROLLERS ---

function getArticles(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Articles');
  const data = getSheetDataAsObjects(sheet);
  
  const token = e.parameter.token;
  let articles = data;
  
  // If not authenticated admin, only return published articles
  if (token !== ADMIN_SECRET_TOKEN) {
    articles = articles.filter(a => a.status === 'Published');
    
    // Strip sensitive/unnecessary data for public API
    articles = articles.map(a => ({
      title: a.title,
      slug: a.slug,
      excerpt: a.excerpt,
      featuredImage: a.featuredImage,
      imageAlt: a.imageAlt,
      category: a.category,
      author: a.author,
      publishDate: a.publishDate,
      updatedDate: a.updatedDate,
      seoTitle: a.seoTitle,
      metaDescription: a.metaDescription,
      canonicalUrl: a.canonicalUrl
    }));
  }
  
  return jsonResponse({ success: true, data: articles });
}

function getArticle(e) {
  const slug = e.parameter.slug;
  const token = e.parameter.token;
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Articles');
  const data = getSheetDataAsObjects(sheet);
  
  const article = data.find(a => a.slug === slug);
  if (!article) return jsonResponse({ success: false, error: 'Article not found' }, 404);
  
  if (token !== ADMIN_SECRET_TOKEN && article.status !== 'Published') {
    return jsonResponse({ success: false, error: 'Article not found' }, 404);
  }
  
  return jsonResponse({ success: true, data: article });
}

function createArticle(payload) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Articles');
  const data = getSheetDataAsObjects(sheet);
  
  let slug = payload.slug || generateSlug(payload.title);
  if (data.some(a => a.slug === slug)) {
    return jsonResponse({ success: false, error: 'Slug already exists. Please choose a unique title.' });
  }
  
  const id = 'ART-' + Utilities.getUuid().substring(0,8).toUpperCase();
  const now = new Date().toISOString();
  
  const newRow = [
    id,
    payload.title || '',
    slug,
    payload.excerpt || '',
    payload.content || '',
    payload.featuredImage || '',
    payload.imageAlt || '',
    payload.category || 'Education',
    payload.tags || '',
    payload.author || 'Rama Skill Academy',
    payload.seoTitle || payload.title,
    payload.metaDescription || payload.excerpt,
    payload.focusKeyword || '',
    payload.canonicalUrl || `https://ramaskillacademy.com/article.html?slug=${slug}`,
    payload.status || 'Draft',
    payload.status === 'Published' ? now : '',
    now,
    now
  ];
  
  sheet.appendRow(newRow);
  return jsonResponse({ success: true, id: id, slug: slug });
}

function updateArticle(payload) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Articles');
  
  // We need to find the row index manually to update it
  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];
  const idIndex = headers.indexOf('id');
  
  let rowIndex = -1;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][idIndex] === payload.id) {
      rowIndex = i + 1; // +1 because rows array is 0-indexed and sheet is 1-indexed
      break;
    }
  }
  
  if (rowIndex === -1) return jsonResponse({ success: false, error: 'Article not found' });
  
  // Check slug uniqueness
  if (payload.slug) {
    const isDuplicate = rows.some((row, i) => i !== (rowIndex - 1) && row[headers.indexOf('slug')] === payload.slug);
    if (isDuplicate) return jsonResponse({ success: false, error: 'Slug already exists.' });
  }
  
  const now = new Date().toISOString();
  
  // Update fields
  for (const key in payload) {
    if (key === 'id' || key === 'createdDate' || key === 'token' || key === 'action') continue;
    const colIndex = headers.indexOf(key);
    if (colIndex !== -1) {
      sheet.getRange(rowIndex, colIndex + 1).setValue(payload[key]);
    }
  }
  
  sheet.getRange(rowIndex, headers.indexOf('updatedDate') + 1).setValue(now);
  
  if (payload.status === 'Published') {
    const pubCol = headers.indexOf('publishDate') + 1;
    const existingPub = sheet.getRange(rowIndex, pubCol).getValue();
    if (!existingPub) sheet.getRange(rowIndex, pubCol).setValue(now);
  }
  
  return jsonResponse({ success: true });
}

function deleteArticle(id) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Articles');
  const rows = sheet.getDataRange().getValues();
  
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === id) { // assuming 'id' is first column
      sheet.deleteRow(i + 1);
      return jsonResponse({ success: true });
    }
  }
  return jsonResponse({ success: false, error: 'Article not found' });
}

function getCategories() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Categories');
  return jsonResponse({ success: true, data: getSheetDataAsObjects(sheet) });
}

// --- HELPER FUNCTIONS ---

function getSheetDataAsObjects(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  
  const headers = data.shift();
  return data.map(row => {
    let obj = {};
    headers.forEach((header, i) => {
      obj[header] = row[i];
    });
    return obj;
  });
}

function generateSlug(text) {
  return text.toString().toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
