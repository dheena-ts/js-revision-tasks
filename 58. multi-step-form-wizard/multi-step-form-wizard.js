let formData = JSON.parse(localStorage.getItem("formData")) || {}


if (formData.name) {
    document.getElementById("name").value = formData.name
}

if (formData.email) {
    document.getElementById("email").value = formData.email
}

if (formData.city) {
    document.getElementById("city").value = formData.city
}

if (formData.country) {
    document.getElementById("country").value = formData.country
}


function showStep(id) {
    document.querySelectorAll(".step").forEach(s => s.style.display = "none")
    document.getElementById(id).style.display = "block"
}


function next1() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    if (name == "" || email == "") {
        alert("Fill all fields")
        return
    }
    formData.name = name
    formData.email = email
    localStorage.setItem("formData", JSON.stringify(formData))
    showStep("step2")
}



function next2() {
    let city = document.getElementById("city").value
    let country = document.getElementById("country").value
    if (city == "" || country == "") {
        alert("Fill all fields")
        return
    }
    formData.city = city
    formData.country = country
    localStorage.setItem("formData", JSON.stringify(formData))
    document.getElementById("review").innerHTML =
        "Name: " + formData.name + "<br>" +
        "Email: " + formData.email + "<br>" +
        "City: " + formData.city + "<br>" +
        "Country: " + formData.country
    showStep("step3")
}


function prev1() {
    showStep("step1")
}


function prev2() {
    showStep("step2")
}


function submitForm() {
    alert("Form Submitted")
    localStorage.removeItem("formData")
    location.reload()
}