const result=document.getElementById('status')

function updateStatus(){

    if(navigator.onLine){
        result.innerHTML="User: online" 
    }
    else{
        result.innerHTML="User: offline"
    }
}
updateStatus()

window.addEventListener('online',updateStatus())
window.addEventListener('offline',updateStatus())