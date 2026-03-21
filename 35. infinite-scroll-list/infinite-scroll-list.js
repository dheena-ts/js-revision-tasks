function loadText() {
    let count=0;
    let g = document.getElementById("gallery");
    for (let i = 0; i < 6; i++) {
        let div = document.createElement("div");
        div.innerHTML='text' 
        g.appendChild(div);
    }
}
loadText();
window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadText();
    }
};