function replaceElement() {
    const arrayInput = document.getElementById('arrayElements').value
    const positionInput = document.getElementById('position').value
    const newElementInput = document.getElementById('newElement').value

    console.log(newElementInput);
    

    const errorDiv = document.getElementById('errorDiv');
    const resultDiv = document.getElementById('resultDiv');

    errorDiv.textContent = '';
    resultDiv.textContent = '';

    if (!arrayInput || !positionInput || !newElementInput) {
        errorDiv.innerHTML = 'All fields must be filled out.';
        return;
    }

    console.log(arrayInput);
    

    let arr = arrayInput.split(',');

    console.log(arr);
    
    
    const position = parseInt(positionInput);
    console.log(position);

     arr.splice(position,1,newElementInput);

    

    resultDiv.textContent = arr;

}