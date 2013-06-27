console.log("loaded");
const tab_log = function(json_args) {
  var args = JSON.parse(unescape(json_args));
  console[args[0]].apply(console, Array.prototype.slice.call(args, 1));
}

var url = null, filename = null;

function checkDownload(){
  if((url != null) && (filename != null)){
    console.log("going to download from: " + url + ", save as: " + filename);
    chrome.downloads.download({url:url,filename:filename});
    url = null; filename = null;
  }
}

function toValidMp3Filename(oriName){
  return oriName.replace(/[$/,.:]/g,"-");
}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse) {
  console.log("got message: " + message);
  if(typeof message.title == "string"){
    // first check if already downloaded
    var savename = toValidMp3Filename(message.title);
    console.log("got title: " + savename);
    chrome.downloads.search({query:savename},function(r){
      console.log("query result: ");
      console.log(r);
      if(r.length == 0){  // never downloaded before
        console.log("query result length is 0. ");
        filename = savename;
      }
    });
    // this is the content to be downloaded
  }
  sendResponse();
});

var urlDownloaded = {};

String.prototype.endWith = function(suffix){
  return this.indexOf(suffix, this.length - suffix.length) != -1;
};

chrome.webRequest.onCompleted.addListener(function(details){
    url = details.url;
    console.log("got url: " + url);
    // this is the url to be downloaded
    checkDownload();
},{urls:[ 
  "*://*.douban.fm/*.mp3",
  "*://*.douban.com/*.mp3"
  ]});
