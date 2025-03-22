//your code here!
// Simulate fetching data
setTimeout(() => {
    for (let i = 0; i < 2; i++) {
        const newItemNum = (pageNum - 1) * 2 + i + 11; // Calculate new item number
        const resultDiv = document.createElement("div"); 
        resultDiv.textContent = `Item ${newItemNum}`; 
        resultDiv.classList.add("search-data"); 
        resultContainer.appendChild(resultDiv); 
    }
    pageNum++; 
    isLoading = false; 
    loadingContainer.innerHTML = ""; 
}, 1000); // Simulate network delay
