console.log("Triggered");
console.log("Title: " + document.title);

setTimeout(function(){
  var title = document.getElementsByTagName("title")[0];
  console.log("Current Title:" + title.innerText);
  document.addEventListener("DOMSubtreeModified",function(evt){ 
    var t = evt.target; 
    if(t == title || (t.parentNode && t.parentNode == title)){
      console.log("New Title:" + title.innerText);
      chrome.runtime.sendMessage({title:title.innerText});
    }
  });
},100);
