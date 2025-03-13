// Listen for changes in extension settings
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    // Get current settings
    chrome.storage.sync.get(['autoRefresh', 'refreshInterval'], (settings) => {
      // Send updated settings to content script
      chrome.tabs.query({url: '*://*.tradingview.com/*'}, (tabs) => {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, {
            action: 'updateSettings',
            settings: settings
          });
        });
      });
    });
  }
});

// Handle installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Set default settings
    chrome.storage.sync.set({
      autoRefresh: false,
      refreshInterval: 60
    });
  }
});