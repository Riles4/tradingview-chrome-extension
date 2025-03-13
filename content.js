// TradingView page interaction logic
let refreshInterval;

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateSettings') {
    updateRefreshInterval(request.settings);
  }
});

// Function to update the refresh interval
function updateRefreshInterval(settings) {
  clearInterval(refreshInterval);
  
  if (settings.autoRefresh) {
    refreshInterval = setInterval(() => {
      refreshChart();
    }, settings.refreshInterval * 1000);
  }
}

// Function to refresh the TradingView chart
function refreshChart() {
  // Find and click the refresh button, or trigger a chart reload
  const refreshButton = document.querySelector('[data-name="refresh"]');
  if (refreshButton) {
    refreshButton.click();
  }
}

// Initial setup
chrome.storage.sync.get(['autoRefresh', 'refreshInterval'], (settings) => {
  updateRefreshInterval(settings);
});