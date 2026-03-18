function displayURL(){
    const fullURL = window.location.href;
    const displayElement = document.getElementById('resultDiv');
    if (displayElement) {
        displayElement.innerText = fullURL;
    }
}