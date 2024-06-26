// Function to fetch and display indexed results
function displayIndexedResults() {
  // Get the search query
  const query = document.querySelector('input[name="q"]').value;

  // Check if the query contains "site:"
  if (query.includes("site:")) {
    // Create a new div to display the indexed results
    const indexedResultsDiv = document.createElement("div");
    indexedResultsDiv.style.position = "fixed";
    indexedResultsDiv.style.bottom = "10px";
    indexedResultsDiv.style.right = "10px";
    indexedResultsDiv.style.backgroundColor = "white";
    indexedResultsDiv.style.border = "1px solid black";
    indexedResultsDiv.style.padding = "10px";
    indexedResultsDiv.style.zIndex = 1000;
    indexedResultsDiv.style.maxHeight = "300px";
    indexedResultsDiv.style.overflowY = "scroll";
    
    // Get the result stats element
    const resultStats = document.getElementById("result-stats");
    let resultCount = "Unknown";
    if (resultStats) {
      const match = resultStats.innerText.match(/About ([\d,]+)/);
      if (match) {
        resultCount = match[1];
      }
    }

    // Create the heading for indexed results
    const heading = document.createElement("h3");
    heading.innerHTML = `Indexed Results (${resultCount} results)`;
    indexedResultsDiv.appendChild(heading);

    // Get all the search results
    const searchResults = document.querySelectorAll('.g');

    searchResults.forEach(result => {
      const link = result.querySelector('a');
      if (link) {
        const url = link.href;
        const title = link.textContent;

        // Create a new div for each indexed result
        const resultDiv = document.createElement("div");
        resultDiv.style.marginBottom = "10px";

        const resultLink = document.createElement("a");
        resultLink.href = url;
        resultLink.textContent = title;
        resultLink.target = "_blank";

        resultDiv.appendChild(resultLink);
        indexedResultsDiv.appendChild(resultDiv);
      }
    });

    // Append the indexed results div to the body
    document.body.appendChild(indexedResultsDiv);
  }
}

// Run the function to display indexed results
displayIndexedResults();
