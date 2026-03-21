let inputs = document.querySelectorAll(".otp")

inputs.forEach((input, index) => {
    input.addEventListener("input", e => {
        if (e.target.value.length == 1 && index < inputs.length - 1) {
            inputs[index + 1].focus()
        }
    })
    input.addEventListener("keydown", e => {
        if (e.key === "Backspace" && input.value == "" && index > 0) {
            inputs[index - 1].focus()
        }
        if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
            e.preventDefault()
        }
    })
})
