function checker() {
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')
    const input = document.getElementById('userInput')
    const word = input.value;

    const first = word[0];
    const last = word[word.length-1];

    if(!word){
        error.innerHTML='Please enter a input'
    }

    else if (first === last) {
        result.innerHTML='First and last characters are same'
    }

    else{
        result.innerHTML='First and last characters are not same'
    }
    // else{
    //     result.innerHTM='First and last characters are not same'
    // }
}