
function emailDomain() {
    const input = document.getElementById('userInput').value
    const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')

    if(!input){
        error.innerHTML='Please enter a email'
    }
    else if(input){
        const domain = input.split('@')[1];
        result.innerHTML=`Domain: ${domain}`;
    }
}

