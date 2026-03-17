function countVowelsConsonents() {
    const input = document.getElementById('userInput').value
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')

    let vowelsCount = 0;
    let consonantsCount = 0;
    const onlyLettersAndSpacesRegex = /^[a-zA-Z\s]+$/;


    const lowerStr = input.toLowerCase();
    const vowels = "aeiou";
    console.log(lowerStr);


    if (!lowerStr || !Number) {
        error.innerHTML = 'Enter a valid input'
    }

    for (const char of lowerStr) {

        if (char >= 'a' && char <= 'z') {

            if (vowels.includes(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }

    result.innerHTML = `Vowels Count: ${vowelsCount} <br>
Consonent count: ${consonantsCount}`
}