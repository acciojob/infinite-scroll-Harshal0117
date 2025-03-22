let pageNum = 1; // To keep track of the current page
let isLoading = false; // To prevent multiple fetches
const container = document.querySelector(".container");
const loadingContainer = document.querySelector(".loading-container");
const resultContainer = document.querySelector(".result-container");

// Function to create and append items
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const newItemNum = (pageNum - 1) * 2 + i + 11; // Calculate new item number
        const resultDiv = document.createElement("div");
        resultDiv.textContent = `Item ${newItemNum}`;
        resultDiv.classList.add("search-data");
        resultContainer.appendChild(resultDiv);
    }
}

// Initial items
addItems(10); // Add 10 initial items

// Function to fetch more data
function fetchData() {
    if (isLoading) return; // Prevent multiple fetches
    isLoading = true;
    loadingContainer.textContent = "Loading ..."; // Show loading text

    // Simulate fetching data with a timeout
    setTimeout(() => {
        addItems(2); // Add 2 more items
        pageNum++; // Increment page number
        isLoading = false; // Reset loading state
        loadingContainer.textContent = ""; // Clear loading text
    }, 1000); // Simulate network delay
}

// Scroll event listener
container.onscroll = () => {
    if (isLoading) return; // Prevent multiple fetches

    // Check if scrolled to the bottom
    if (Math.ceil(container.clientHeight + container.scrollTop) >= container.scrollHeight) {
        fetchData(); // Fetch more data
    }
};