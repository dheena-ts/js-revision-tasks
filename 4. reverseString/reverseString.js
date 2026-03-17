function reverseString(){
    const input = document.getElementById('userInput')
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')

    const word = input.value;

    if(!word){
        error.innerHTML='Please enter a input'
    }

    else{
    const reverse = word.split('').reverse().join('')

    result.innerHTML=`The reversed string is = ${reverse}`
    }
    
}