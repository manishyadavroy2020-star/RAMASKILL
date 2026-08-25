/**
 * RAMA SKILL ACADEMY - CMS ADMIN PANEL
 */

// Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby3h6KNvWvs8kYbIbzaiTpcKY4rVdgl2HUmp0CYk2MvplsCDv_bEm-XNnhebDPk1IcF0Q/exec';

let token = localStorage.getItem('cms_token') || '';
let articlesData = [];
let categoriesData = [];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', function() {
  if (token) {
    verifyToken(token);
  } else {
    showView('login-view');
  }
  setupEventListeners();
});

function setupEventListeners() {
  // Login
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var inputToken = document.getElementById('admin-token').value;
    verifyToken(inputToken);
  });

  // Logout
  document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('cms_token');
    token = '';
    showView('login-view');
  });

  // Navigation
  document.querySelectorAll('.nav-item').forEach(function(nav) {
    nav.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(function(n) { n.classList.remove('active'); });
      e.target.classList.add('active');
      switchPanel(e.target.dataset.view);
    });
  });

  // New Article
  document.getElementById('btn-new-article').addEventListener('click', function() {
    resetEditor();
    switchPanel('editor');
  });

  // Cancel Edit
  document.getElementById('btn-cancel-edit').addEventListener('click', function() {
    switchPanel('dashboard');
  });

  // Save Draft & Publish
  document.getElementById('btn-save-draft').addEventListener('click', function() { saveArticle('Draft'); });
  document.getElementById('btn-publish').addEventListener('click', function() { saveArticle('Published'); });

  // SEO Preview Updates
  document.getElementById('edit-title').addEventListener('input', updateSEOPreview);
  document.getElementById('edit-seo-title').addEventListener('input', updateSEOPreview);
  document.getElementById('edit-meta-desc').addEventListener('input', updateSEOPreview);
  document.getElementById('edit-excerpt').addEventListener('input', updateSEOPreview);
  
  // Search and Filter
  document.getElementById('search-articles').addEventListener('input', renderArticlesTable);
  document.getElementById('filter-status').addEventListener('change', renderArticlesTable);
}

// --- Views & Panels ---
function showView(viewId) {
  document.querySelectorAll('.view').forEach(function(v) { v.classList.remove('active'); });
  document.getElementById(viewId).classList.add('active');
}

function switchPanel(panelName) {
  document.querySelectorAll('.content-panel').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('view-' + panelName).classList.add('active');
  
  if (panelName === 'dashboard') fetchArticles();
  if (panelName === 'categories') fetchCategories();
}

function showToast(message) {
  var toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(function() { toast.classList.add('hidden'); }, 3000);
}

// --- API Calls ---
// Google Apps Script redirects POST to GET, dropping the body.
// So we use GET with URL parameters for all requests.
function buildUrl(params) {
  var url = GOOGLE_APPS_SCRIPT_URL + '?';
  var parts = [];
  for (var key in params) {
    if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
      parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    }
  }
  return url + parts.join('&');
}

async function apiRequest(action, payload) {
  payload = payload || {};
  try {
    payload.action = action;
    payload.token = token;
    
    var url = buildUrl(payload);
    
    var response = await fetch(url, {
      method: 'GET',
      redirect: 'follow'
    });
    
    var text = await response.text();
    
    try {
      return JSON.parse(text);
    } catch (parseErr) {
      console.error('Failed to parse response:', text.substring(0, 200));
      return { success: false, error: 'Invalid response from server.' };
    }
  } catch (err) {
    console.error('API Error:', err);
    return { success: false, error: 'Network error: ' + err.message };
  }
}

async function verifyToken(testToken) {
  document.getElementById('login-error').classList.add('hidden');
  var loginBtn = document.querySelector('#login-form button[type="submit"]');
  if (loginBtn) {
    loginBtn.textContent = 'Logging in...';
    loginBtn.disabled = true;
  }
  
  token = testToken;
  var res = await apiRequest('verifyLogin');
  
  if (loginBtn) {
    loginBtn.textContent = 'Login';
    loginBtn.disabled = false;
  }
  
  if (res.success) {
    localStorage.setItem('cms_token', token);
    document.getElementById('login-error').classList.add('hidden');
    showView('app-view');
    switchPanel('dashboard');
    fetchCategories();
  } else {
    token = '';
    localStorage.removeItem('cms_token');
    document.getElementById('login-error').textContent = res.error || 'Invalid token or connection error.';
    document.getElementById('login-error').classList.remove('hidden');
    showView('login-view');
  }
}

async function fetchArticles() {
  document.getElementById('articles-loading').classList.remove('hidden');
  document.getElementById('articles-table').querySelector('tbody').innerHTML = '';
  
  var res = await apiRequest('getArticles');
  if (res.success) {
    articlesData = res.data;
    renderArticlesTable();
  } else {
    console.error(res.error || 'Failed to fetch articles');
  }
  document.getElementById('articles-loading').classList.add('hidden');
}

async function fetchCategories() {
  var res = await apiRequest('getCategories');
  if (res.success) {
    categoriesData = res.data;
    var catSelect = document.getElementById('edit-category');
    catSelect.innerHTML = categoriesData.map(function(c) { 
      return '<option value="' + c.name + '">' + c.name + '</option>'; 
    }).join('');
  }
}

// --- Dashboard ---
function renderArticlesTable() {
  var tbody = document.getElementById('articles-table').querySelector('tbody');
  var search = document.getElementById('search-articles').value.toLowerCase();
  var filter = document.getElementById('filter-status').value;
  
  var html = '';
  
  var filtered = articlesData.filter(function(a) {
    var matchSearch = a.title.toLowerCase().includes(search) || a.slug.toLowerCase().includes(search);
    var matchStatus = filter === 'All' || a.status === filter;
    return matchSearch && matchStatus;
  });

  filtered.forEach(function(article) {
    var d = new Date(article.updatedDate).toLocaleDateString();
    html += '<tr>' +
      '<td><strong>' + (article.title || 'Untitled') + '</strong><br><small class="text-muted">/' + article.slug + '</small></td>' +
      '<td>' + article.category + '</td>' +
      '<td><span class="badge ' + article.status.toLowerCase() + '">' + article.status + '</span></td>' +
      '<td>' + d + '</td>' +
      '<td>' +
        '<button class="btn-text" onclick="editArticle(\'' + article.id + '\')">Edit</button>' +
        '<button class="btn-text" style="color:var(--danger)" onclick="deleteArticle(\'' + article.id + '\')">Delete</button>' +
      '</td>' +
    '</tr>';
  });
  
  tbody.innerHTML = html || '<tr><td colspan="5">No articles found.</td></tr>';
}

// --- Editor ---
function resetEditor() {
  document.getElementById('article-form').reset();
  document.getElementById('edit-id').value = '';
  document.getElementById('edit-slug').value = '';
  document.getElementById('editor-title').textContent = 'New Article';
  document.getElementById('edit-image').value = '';
  document.getElementById('edit-image-alt').value = '';
  document.getElementById('edit-seo-title').value = '';
  document.getElementById('edit-meta-desc').value = '';
  updateSEOPreview();
}

function editArticle(id) {
  var article = articlesData.find(function(a) { return a.id === id; });
  if (!article) return;
  
  resetEditor();
  document.getElementById('editor-title').textContent = 'Edit Article';
  
  document.getElementById('edit-id').value = article.id;
  document.getElementById('edit-slug').value = article.slug;
  document.getElementById('edit-title').value = article.title;
  document.getElementById('edit-content').value = article.content;
  document.getElementById('edit-excerpt').value = article.excerpt;
  document.getElementById('edit-status').value = article.status;
  document.getElementById('edit-category').value = article.category;
  document.getElementById('edit-image').value = article.featuredImage;
  document.getElementById('edit-image-alt').value = article.imageAlt;
  document.getElementById('edit-seo-title').value = article.seoTitle || '';
  document.getElementById('edit-meta-desc').value = article.metaDescription || '';
  
  updateSEOPreview();
  switchPanel('editor');
}

async function saveArticle(status) {
  var id = document.getElementById('edit-id').value;
  var title = document.getElementById('edit-title').value;
  
  if (!title) {
    alert('Title is required');
    return;
  }
  
  var payload = {
    title: title,
    content: document.getElementById('edit-content').value,
    excerpt: document.getElementById('edit-excerpt').value,
    status: status,
    category: document.getElementById('edit-category').value,
    featuredImage: document.getElementById('edit-image').value,
    imageAlt: document.getElementById('edit-image-alt').value,
    seoTitle: document.getElementById('edit-seo-title').value,
    metaDescription: document.getElementById('edit-meta-desc').value
  };
  
  var action = id ? 'updateArticle' : 'createArticle';
  if (id) payload.id = id;
  
  var btn = status === 'Published' ? 'btn-publish' : 'btn-save-draft';
  var originalText = document.getElementById(btn).textContent;
  document.getElementById(btn).textContent = 'Saving...';
  
  var res = await apiRequest(action, payload);
  
  document.getElementById(btn).textContent = originalText;
  
  if (res.success) {
    showToast('Article ' + status.toLowerCase() + ' successfully!');
    switchPanel('dashboard');
  } else {
    alert(res.error || 'Failed to save article.');
  }
}

async function deleteArticle(id) {
  if (!confirm('Are you sure you want to delete this article?')) return;
  
  var res = await apiRequest('deleteArticle', { id: id });
  if (res.success) {
    showToast('Article deleted.');
    fetchArticles();
  } else {
    alert(res.error || 'Failed to delete');
  }
}

function updateSEOPreview() {
  var title = document.getElementById('edit-seo-title').value || document.getElementById('edit-title').value || 'SEO Title Placeholder';
  var desc = document.getElementById('edit-meta-desc').value || document.getElementById('edit-excerpt').value || 'Meta description placeholder...';
  var slug = document.getElementById('edit-slug').value || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'your-slug';
  
  document.getElementById('preview-title').textContent = title.substring(0, 60) + (title.length > 60 ? '...' : '');
  document.getElementById('preview-desc').textContent = desc.substring(0, 160) + (desc.length > 160 ? '...' : '');
  document.getElementById('preview-slug').textContent = slug;
}
