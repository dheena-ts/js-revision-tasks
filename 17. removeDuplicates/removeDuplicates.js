function removeDuplicates() {

    const inputString = document.getElementById('userInput').value
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')


    if (!inputString || inputString.trim() === "") {
        error.innerHTML = "Empty input is not allowed"
    }
    const rawArray = inputString.split(/,\s*/g).filter(item => item.trim() !== "");
    if (rawArray.length === 0) {
        error.innerHTML = "Input is not valid"
    }

    const uniqueArray = [...new Set(rawArray)];
    if (uniqueArray.length <= 1) {
        error.innerHTML = "Single character is not allowed"
    }

    result.innerHTML = `The unique elements are : ${uniqueArray}`

}