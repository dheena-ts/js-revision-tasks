let imageList = [
    "https://picsum.photos/id/1015/500/300",
    "https://picsum.photos/id/1016/500/300",
    "https://picsum.photos/id/1018/500/300",
    "https://picsum.photos/id/1020/500/300"
];
let currentIndex = 0;
function autoSlide() {
    currentIndex++;
    if (currentIndex >= imageList.length) {
        currentIndex = 0;
    }
    document.getElementById("banner").src = imageList[currentIndex];
}
setInterval(autoSlide, 3000);