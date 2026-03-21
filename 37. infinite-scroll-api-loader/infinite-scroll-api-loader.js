const url = 'https://jsonplaceholder.typicode.com/users';
const userList = document.getElementById('user-names-list');

async function fetchUserDetails(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error status: ${response.status}`)
        }
        const userData = await response.json();
    
        userData.forEach(user => {
            const item = document.createElement('div')
            item.classList.add('myClass');

            item.innerHTML=`User Name: ${user.name} <br>
                            Email: ${user.email} <br>
                            Phone: ${user.phone} `
            userList.appendChild(item)
        });
    }
    catch{
        console.error('Error: ',error);
    }
}
fetchUserDetails()


window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchUserDetails();
    }
};


































// container =document.querySelector('.container')
// const URL = "https://picsum.photos/200/300"

// function getRandNum(){
//     return Math.floor(Math.random()*100)
// }

// function loadImages(numImages =10){
//     let i=0;
//     while(i<numImages){
//         const img = document.createElement('img')
//         img.src=`${URL}`
//         img.style.width='400px'
//         img.style.height='400px'

//         container.appendChild(img)
//         i++
//     }
// }
// loadImages()

// window.addEventListener('scroll',()=>{
//     console.log(window.innerHeight);

//     if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
//         loadImages()
//     }
// })





// function loadText() {
//     let count=0;
//     let g = document.getElementById("gallery");
//     for (let i = 0; i < 6; i++) {
//         let div = document.createElement("div");
//         div.innerHTML='text' 
//         g.appendChild(div);
//     }
// }
// loadText();
// window.onscroll = function () {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         loadText();
//     }
// };