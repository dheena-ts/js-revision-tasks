let pass = document.getElementById("pass");
pass.addEventListener("input", function () {
    let value = pass.value;
    let strong = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}/;
    if (value.length < 6) {
        document.getElementById("strength").innerText = "Weak";
    }
    else if (!strong.test(value)) {
        document.getElementById("strength").innerText = "Medium";
    }
    else {
        document.getElementById("strength").innerText = "Strong";
    }

});