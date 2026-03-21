let images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250",
    "https://picsum.photos/id/1020/400/250"
];
let index = 0;
function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById("slider").src = images[index];
}
function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    document.getElementById("slider").src = images[index];
}

