function textCopy(){
    const copyText = document.getElementById('userInput')
    const message = document.getElementById('messageDiv')

    copyText.select();

    navigator.clipboard.writeText(copyText.value)
    .then(()=>{
        message.innerHTML="Text copied to clipboard"
    })
    .catch((error)=>{
        message.innerHTML=`Text not copied due to ${error}`
    })
}