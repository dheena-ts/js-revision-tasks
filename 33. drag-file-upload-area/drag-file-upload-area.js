let drop = document.getElementById("drop")
let fileInput = document.getElementById("fileInput")
let fileName = document.getElementById("fileName")


drop.addEventListener("click", () => {
    fileInput.click()
})


fileInput.addEventListener("change", () => {
    validateFile(fileInput.files[0])
})


drop.addEventListener("dragover", e => {
    e.preventDefault()
    drop.classList.add("hover")
})


drop.addEventListener("dragleave", () => {
    drop.classList.remove("hover")
})


drop.addEventListener("drop", e => {
    e.preventDefault()
    drop.classList.remove("hover")
    let file = e.dataTransfer.files[0]
    validateFile(file)
})


function validateFile(file) {
    if (!file) return
    if (file.type.startsWith("image/")) {
        fileName.innerText = "File: " + file.name
    } else {
        fileName.innerText = "Only image allowed"
    }
}
