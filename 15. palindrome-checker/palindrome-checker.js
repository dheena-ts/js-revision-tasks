function isPalindrome(){
    const input = document.getElementById('userInput').value
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')
    
    const temp = input.split("").reverse().join("")

    if(!input){
        error.innerHTML="Please enter a valid input"
    }
    else if(!isNaN(input)){
        error.innerHTML="Number not allowed"
    }

    else if(temp == input){
        result.innerHTML=`${input} is palindrome`
    }
    else{
        result.innerHTML=`${input} is not palindrome`
    }
}