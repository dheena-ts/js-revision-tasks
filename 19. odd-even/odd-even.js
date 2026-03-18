function oddEven() {
    const input = document.getElementById('userInput').value
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')

    if(!input){
        error.innerHTML="Please enter a input"
    }
    else if(!Number){
        error.innerHTML="Letters not allowed"
    }
    else if(isNaN(input)){
        error.innerHTML="Not a number"
    }
    else if(input % 2 === 0){
        result.innerHTML=`The input ${input} is Even`
    }
    else{
        result.innerHTML=`The input ${input} is odd.`
    }

}