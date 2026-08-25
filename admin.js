/**
 * RAMA SKILL ACADEMY - CMS ADMIN PANEL
 */

// Paste your deployed Google Apps Script Web App URL here
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby3h6KNvWvs8kYbIbzaiTpcKY4rVdgl2HUmp0CYk2MvplsCDv_bEm-XNnhebDPk1IcF0Q/exec';

let token = localStorage.getItem('cms_token') || '';
let articlesData = [];
let categoriesData = [];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  if (token) {
    verifyToken(token);
  } else {
    showView('login-view');
  }

  setupEventListeners();
});


async function hashToken(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function setupEventListeners() {
  // Login
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputToken = document.getElementById('admin-token').value;
    verifyToken(inputToken);
  });

  // Logout
  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('cms_token');
    token = '';
    showView('login-view');
  });

  // Navigation
  document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      e.target.classList.add('active');
      switchPanel(e.target.dataset.view);
    });
  });

  // New Article
  document.getElementById('btn-new-article').addEventListener('click', () => {
    resetEditor();
    switchPanel('editor');
  });

  // Cancel Edit
  document.getElementById('btn-cancel-edit').addEventListener('click', () => {
    switchPanel('dashboard');
  });

  // Save Draft
  document.getElementById('btn-save-draft').addEventListener('click', () => saveArticle('Draft'));
  
  // Publish
  document.getElementById('btn-publish').addEventListener('click', () => saveArticle('Published'));

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
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
}

function switchPanel(panelName) {
  document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`view-${panelName}`).classList.add('active');
  
  if (panelName === 'dashboard') fetchArticles();
  if (panelName === 'categories') fetchCategories();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

// --- API Calls ---
async function apiRequest(action, payload = {}) {
  try {
    payload.action = action;
    payload.token = token;
    
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error('API Error:', err);
    return { success: false, error: 'Network error or CORS issue.' };
  }
}

async function verifyToken(testToken) {
  token = testToken;
  const res = await apiRequest('verifyLogin');
  if (res.success) {
    localStorage.setItem('cms_token', token);
    document.getElementById('login-error').classList.add('hidden');
    showView('app-view');
    switchPanel('dashboard');
    fetchCategories(); // Load categories for the dropdown
  } else {
    token = '';
    localStorage.removeItem('cms_token');
    document.getElementById('login-error').classList.remove('hidden');
    showView('login-view');
  }
}

async function fetchArticles() {
  document.getElementById('articles-loading').classList.remove('hidden');
  document.getElementById('articles-table').querySelector('tbody').innerHTML = '';
  
  const res = await apiRequest('getArticles');
  if (res.success) {
    articlesData = res.data;
    renderArticlesTable();
  } else {
    alert(res.error || 'Failed to fetch articles');
  }
  document.getElementById('articles-loading').classList.add('hidden');
}

async function fetchCategories() {
  const res = await apiRequest('getCategories');
  if (res.success) {
    categoriesData = res.data;
    const catSelect = document.getElementById('edit-category');
    catSelect.innerHTML = categoriesData.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  }
}

// --- Dashboard ---
function renderArticlesTable() {
  const tbody = document.getElementById('articles-table').querySelector('tbody');
  const search = document.getElementById('search-articles').value.toLowerCase();
  const filter = document.getElementById('filter-status').value;
  
  let html = '';
  
  const filtered = articlesData.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(search) || a.slug.toLowerCase().includes(search);
    const matchStatus = filter === 'All' || a.status === filter;
    return matchSearch && matchStatus;
  });

  filtered.forEach(article => {
    const d = new Date(article.updatedDate).toLocaleDateString();
    html += `
      <tr>
        <td><strong>${article.title || 'Untitled'}</strong><br><small class="text-muted">/${article.slug}</small></td>
        <td>${article.category}</td>
        <td><span class="badge ${article.status.toLowerCase()}">${article.status}</span></td>
        <td>${d}</td>
        <td>
          <button class="btn-text" onclick="editArticle('${article.id}')">Edit</button>
          <button class="btn-text" style="color:var(--danger)" onclick="deleteArticle('${article.id}')">Delete</button>
        </td>
      </tr>
    `;
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
  const article = articlesData.find(a => a.id === id);
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
  if (GOOGLE_APPS_SCRIPT_URL.includes('YOUR_GOOGLE')) {
    alert("Please set the GOOGLE_APPS_SCRIPT_URL in admin.js first.");
    return;
  }

  const id = document.getElementById('edit-id').value;
  const title = document.getElementById('edit-title').value;
  
  if (!title) {
    alert('Title is required');
    return;
  }
  
  const payload = {
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
  
  const action = id ? 'updateArticle' : 'createArticle';
  if (id) payload.id = id;
  
  // Show saving state
  const btn = status === 'Published' ? 'btn-publish' : 'btn-save-draft';
  const originalText = document.getElementById(btn).textContent;
  document.getElementById(btn).textContent = 'Saving...';
  
  const res = await apiRequest(action, payload);
  
  document.getElementById(btn).textContent = originalText;
  
  if (res.success) {
    showToast(`Article ${status.toLowerCase()} successfully!`);
    switchPanel('dashboard');
  } else {
    alert(res.error || 'Failed to save article.');
  }
}

async function deleteArticle(id) {
  if (!confirm('Are you sure you want to delete this article?')) return;
  
  const res = await apiRequest('deleteArticle', { id });
  if (res.success) {
    showToast('Article deleted.');
    fetchArticles();
  } else {
    alert(res.error || 'Failed to delete');
  }
}

function updateSEOPreview() {
  const title = document.getElementById('edit-seo-title').value || document.getElementById('edit-title').value || 'SEO Title Placeholder';
  const desc = document.getElementById('edit-meta-desc').value || document.getElementById('edit-excerpt').value || 'Meta description placeholder...';
  const slug = document.getElementById('edit-slug').value || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'your-slug';
  
  document.getElementById('preview-title').textContent = title.substring(0, 60) + (title.length > 60 ? '...' : '');
  document.getElementById('preview-desc').textContent = desc.substring(0, 160) + (desc.length > 160 ? '...' : '');
  document.getElementById('preview-slug').textContent = slug;
}
