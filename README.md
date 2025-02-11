# CamShield - Chrome Extension

CamShield is a Chrome extension that detects unauthorized webcam access and alerts the user. It logs webcam usage and provides an easy-to-use interface for monitoring and managing website access.

## Features
- **Detect Unauthorized Webcam Access**: Alerts the user when a website accesses the webcam.
- **Webcam Access Logs**: Stores a history of websites that accessed the webcam.
- **Blacklist Websites**: Allows users to block certain websites from using the webcam.
- **Popup UI**: Displays a log of recent webcam access events.
- **Notifications**: Sends real-time alerts when the webcam is used.

## Installation
1. **Download the Code**: Clone this repository or download the ZIP file.
2. **Extract the Files**: Ensure all files are in a single folder.
3. **Load the Extension**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle at the top-right).
   - Click **Load unpacked** and select the extension folder.
4. The CamShield icon will appear in the Chrome toolbar.

## How to Use
- **View Logs**: Click the extension icon to open the popup and check the webcam access history.
- **Clear Logs**: Click the "Clear Logs" button to remove all records.
- **Manage Blacklist**:
  - Go to `chrome://extensions/` → Click **Details** under CamShield → Click **Extension Options**.
  - Add or remove websites from the blacklist.

## Files Overview
- **manifest.json**: Chrome extension manifest file.
- **popup.html**: UI for displaying webcam logs.
- **popup.js**: Handles UI interactions in the popup.
- **background.js**: Detects and logs webcam access.
- **options.html**: Settings page for managing the blacklist.
- **options.js**: Handles settings interactions.
- **icon1.jpg**: Extension icon.

## Troubleshooting
- **Manifest Error**: Ensure `manifest.json` is correctly formatted and includes all necessary files.
- **Extension Not Loading**: Check Chrome’s extension page (`chrome://extensions/`) for errors.
- **Logs Not Updating**: Reload the extension and check the background script in DevTools (`chrome://extensions/` → Click "background page").

## License
This project is open-source and free to use under the MIT License.

