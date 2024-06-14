// Content script to extract indexed results from Google search page
const resultStats = document.getElementById("result-stats");
if (resultStats) {
    const indexedResults = resultStats.innerText.match(/\d+(?=\sresult)/);
    if (indexedResults) {
        chrome.runtime.sendMessage({ indexedResults: indexedResults[0] });
    }
}
