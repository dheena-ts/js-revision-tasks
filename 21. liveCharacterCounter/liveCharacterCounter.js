const textArea = document.getElementById('userInput')
const charCount = document.getElementById('charCount')
const charLength = 200;

textArea.addEventListener('input',function(){
    const currentLength = this.value.length;
    charCount.textContent=currentLength;
    if (currentLength >= charLength) {
        charCount.innerHTML="Limit reached"
    }
})