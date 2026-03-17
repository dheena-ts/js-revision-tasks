
function vowelOrNot() {
    const result = document.getElementById('resultDiv');
    const error = document.getElementById('errorDiv')

    const input = document.getElementById('userInput')
    const letter = input.value;

    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    if(!letter){
        error.innerHTML="Please enter a letter"
    }
    if (vowels.has(letter)) {
        result.innerHTML=`${letter} is a vowel.`
    } else {
        result.innerHTML=`${letter} is not vowel`
    }
}