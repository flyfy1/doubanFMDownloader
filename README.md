doubanFMDownloader
==================

### Requirement 
1. Chrome Dev Channel: http://www.chromium.org/getting-involved/dev-channel </br> The Dev Channel is needed, for whatever platform you're using.
2. Extension Developer Mode: chrome://extensions/ </br> Select the `Developer Mode` on the top right corner
3. Experimental API setup: chrome://flags/ search for "Experimental Extension APIs", make sure it's enabled

### Use
1. Checkout/Download this project, put it somewhere
2. In the [chrome's extenson page](chrome://extensions/), install it from somewhere.

3. Then just browse to [doubanFM](fm.)

### Notes
1. Because of the Limitation of Google Chrome, it can only download files into the root of Download folder
2. I believe with the playlist.json file, we can easily download the corresponding file from any location. Thus I wrote this playlist.json file downloade first (as you can see from the source code it's easy to make it to be real-time downloading), and then I'll further write a script (probably in PHP..) to auto-download files and do file-renaming.
