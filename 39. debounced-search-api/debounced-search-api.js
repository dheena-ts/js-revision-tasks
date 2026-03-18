function debounce(func, delay) {
    let timer; 
    return function(...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function fetchResults(query) {
    if (query.trim() === '') {
        console.log("Query is empty.");
        return;
    }
    console.log("Fetching results: ", query);
    
    fetch(`https://api.github.com/search/users?q=`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
    
}

const debouncedSearch = debounce(fetchResults, 500); 
const input = document.getElementById("userInput");
input.addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
});

