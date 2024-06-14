// Content script to extract indexed results from Google search page
const resultStats = document.getElementById("result-stats");
if (resultStats) {
    const indexedResults = resultStats.innerText.match(/\d+(?=\sresult)/);
    if (indexedResults) {
        console.log("Indexed results:", indexedResults[0]);
        chrome.runtime.sendMessage({ indexedResults: indexedResults[0] });
    }
}

// Popup script to update popup HTML with indexed results
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message received:", message);
  if (message.indexedResults) {
    console.log("Indexed results:", message.indexedResults);
    document.getElementById("indexedResults").textContent = message.indexedResults + " indexed results";
  }
});
