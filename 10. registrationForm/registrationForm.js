
function  validate(){
    const input = document.getElementsByTagName('input').value
        const error = document.getElementById('errorDiv')
    const result = document.getElementById('resultDiv')

    if(!input){
        error.innerHTML="Please fill all input"
    }
    if(input){
        result.innerHTML="Form submitted"
    }
}