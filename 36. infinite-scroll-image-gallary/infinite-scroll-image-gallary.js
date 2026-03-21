container =document.querySelector('.container')
const URL = "https://picsum.photos/200/300"

function getRandNum(){
    return Math.floor(Math.random()*100)
}

function loadImages(numImages =10){
    let i=0;
    while(i<numImages){
        const img = document.createElement('img')
        img.src=`${URL}`
        img.style.width='400px'
        img.style.height='400px'

        container.appendChild(img)
        i++
    }
}
loadImages()

window.addEventListener('scroll',()=>{
    console.log(window.innerHeight);

    if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})