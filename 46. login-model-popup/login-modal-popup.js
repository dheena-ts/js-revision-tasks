let modal = document.getElementById("modal")
let error = document.getElementById("error")


function openModal() {
    modal.style.display = "flex"
}
function closeModal() {
    modal.style.display = "none"
    error.innerText = ""
}

function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email == "" || password == "") {
        error.innerText = "Please enter a input"
        return
    }

    if (!email.includes("@")) {
        error.innerText = "Invalid email"
        return
    }
    error.style.color = "green"
    error.innerText = "Login Success"
}
