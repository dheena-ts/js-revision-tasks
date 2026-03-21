var modal = document.getElementById("modalDiv");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0]

function openModal(){
    modal.classList.add('show')
}

function closeModal(){
    modal.classList.remove('show')
}

btn.addEventListener('click',openModal);
span.addEventListener('click',closeModal);