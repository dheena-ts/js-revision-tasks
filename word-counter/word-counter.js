function countWords() {
    const input = document.getElementById('userInput').value
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')

    if (!input) {
        error.innerHTML = 'Please enter a input'
    }
    else {
        const textWithoutSpecialChar  = input.replace(/[^\w\s]/g, ' ');
        const finalWord = textWithoutSpecialChar.replace(/\s+/g, ' ').trim();


        const count = finalWord.split(' ').length

        result.innerHTML = `Count is ${count}`
    }

}