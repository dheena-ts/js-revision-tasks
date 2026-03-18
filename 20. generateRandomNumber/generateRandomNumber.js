
function getRandom() {
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')
    let min = document.getElementById('userInputMin').value
    let max = document.getElementById('userInputMax').value
    console.log(min);
    console.log(max)

    if (!min || !max) {
        error.innerHTML = 'Please enter a input'
    }
    else if (min && max) {
        const random = Math.floor(Math.random() * (max - min) + min);
        console.log(random);

        result.innerHTML = random
    }
}