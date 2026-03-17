function counter() {
    const textarea = document.getElementById('userInput');
    const charCount = document.getElementById('resultDiv');
        const error = document.getElementById('errorDiv');


        const text = textarea.value;
        if (text.trim().length === 0) {
            error.innerText = "Empty input not allowed!";

        } else {

            const count = text.length;
            charCount.innerText = `${count} characters`;
        }

}