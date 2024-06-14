// Popup script to update popup HTML with indexed results
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.indexedResults) {
    document.getElementById("indexedResults").textContent = message.indexedResults + " indexed results";
  }
});
