/*
console.log("exec message");
chrome.devtools.network.getHAR(function(result) {
    chrome.devtools.network.onRequestFinished.addListener(function(request){
      chrome.runtime.sendMessage("In ReqFin, content result:");
      chrome.runtime.sendMessage(request);
      request.getContent(function(res)){
        chrome.runtime.sendMessage(res);
      });
    });
  chrome.runtime.sendMessage("In Exec, HAR result:");
  chrome.runtime.sendMessage(result);
});
*/
