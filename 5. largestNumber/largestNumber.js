function largestNumber() {

    const input = document.getElementById('userInput').value
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')
    const numberString = input.split(/[\s,]+/);

    const numbers = numberString.map(Number).filter(number => !isNaN(number));

    if (numbers.length > 0) {
        const maxNumber = Math.max(...numbers);
        result.textContent = maxNumber;
    } else {
        error.textContent = 'No valid numbers entered.';
    }
}