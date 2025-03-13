# TradingView Chrome Extension

A Chrome extension that enhances your TradingView experience with additional functionality.

## Features

- Auto-refresh charts at customizable intervals
- Easy-to-use popup interface
- Seamless integration with TradingView

## Installation

1. Clone this repository or download the ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the extension icon in your Chrome toolbar
2. Configure your preferred settings:
   - Enable/disable auto-refresh
   - Set refresh interval
3. The extension will automatically work on TradingView pages

## Development

### Project Structure

```
├── manifest.json       # Extension configuration
├── popup.html         # Extension popup interface
├── popup.js           # Popup functionality
├── styles.css         # Popup styles
├── content.js         # TradingView page interaction
├── background.js      # Background service worker
└── icons/             # Extension icons
```

### Local Development

1. Make changes to the code
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension
4. Test the changes on TradingView

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License