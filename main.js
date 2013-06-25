console.log("loaded");
const tab_log = function(json_args) {
  var args = JSON.parse(unescape(json_args));
  console[args[0]].apply(console, Array.prototype.slice.call(args, 1));
}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse) {
  console.log("Longging Command");
  console.log(message);
  console.log(sender);
  sendResponse();
});

var urlDownloaded = {};

String.prototype.endWith = function(suffix){
  return this.indexOf(suffix, this.length - suffix.length) != -1;
};

chrome.webRequest.onResponseStarted.addListener(function(details){
    var url = details.url,
        lurl = url.toLowerCase();
    if(urlDownloaded[url])  return;
// lurl.endWith(".mp3") || lurl.endWith(".jpg") 
    if(lurl.indexOf("playlist?") != -1 ){
      urlDownloaded[url] = 1;
      chrome.downloads.download({url:url});
    }
},{urls:[ "http://douban.fm/*" ]});
