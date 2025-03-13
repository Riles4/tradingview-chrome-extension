document.addEventListener('DOMContentLoaded', function() {
  // Load saved settings
  chrome.storage.sync.get(['autoRefresh', 'refreshInterval'], function(items) {
    document.getElementById('autoRefresh').checked = items.autoRefresh || false;
    document.getElementById('refreshInterval').value = items.refreshInterval || 60;
  });

  // Save settings when changed
  document.getElementById('autoRefresh').addEventListener('change', function(e) {
    chrome.storage.sync.set({ autoRefresh: e.target.checked });
    updateStatus();
  });

  document.getElementById('refreshInterval').addEventListener('change', function(e) {
    chrome.storage.sync.set({ refreshInterval: e.target.value });
    updateStatus();
  });

  function updateStatus() {
    const autoRefresh = document.getElementById('autoRefresh').checked;
    const statusText = document.getElementById('statusText');
    statusText.textContent = autoRefresh ? 'Active' : 'Inactive';
    statusText.style.color = autoRefresh ? '#2e7d32' : '#c62828';
  }

  updateStatus();
});