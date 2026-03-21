const idelTimeout=5;
const logoutTimeout=5;
let idleTimer;
let logoutTimer;
const idleModal = document.getElementById('idleModal');
const modalOverlay = document.getElementById('modalOverlay');
const yesButton = document.getElementById('yesButton');

function logout(){
    alert("You have been logedout because of inactivity")
}

function showModel(){
    idleModal.style.display='block';
    modalOverlay.style.display='block';
    logoutTimer = setTimeout(logout, logoutTimeout * 1000);
}

function resetTimer() {
    clearTimeout(idleTimer);
    clearTimeout(logoutTimer);
    idleModal.style.display = 'none';
    modalOverlay.style.display = 'none';
    idleTimer = setTimeout(showModel, idelTimeout * 1000);
}

document.addEventListener('mousedown',resetTimer,false)
document.addEventListener('mousemove',resetTimer,true)
document.addEventListener('keypress',resetTimer,false)
document.addEventListener('touchstart',resetTimer,false)
document.addEventListener('scroll',resetTimer,true)

yesButton.addEventListener('click', resetTimer, false);

window.onload = resetTimer;
