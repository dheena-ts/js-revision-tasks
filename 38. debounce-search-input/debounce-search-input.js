function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            func.apply(this,args);
        },delay)
    }
}


const handleSearch = (event)=>{
    console.log(event.target.value);
}
const debouncedSearch =debounce(handleSearch,500);

const searchInput =document.getElementById('userInput')
searchInput.addEventListener('input',debouncedSearch)