function add(){
    const result= document.getElementById('outputBox')
    const inputString = document.getElementById('userInput').value;
    const stringArray = inputString.trim().split(/[\s,]+/);
    const numbers = stringArray
        .map(Number)
        .filter(num => !isNaN(num) && num !== '');

        if (numbers.length < 2) {
        document.getElementById('addError').value = 'Need at least 2 numbers';
        return;
        }

        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum);
        
        result.innerHTML=sum;

}

function multiply(){
    const result= document.getElementById('outputBox')
    const inputString = document.getElementById('userInput').value;
    const stringArray = inputString.trim().split(/[\s,]+/);
    const numbers = stringArray
        .map(Number)
        .filter(num => !isNaN(num) && num !== '');

        if (numbers.length < 2) {
        document.getElementById('multiError').value = 'Need at least 2 numbers';
        return;
        }

        const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        
        result.innerHTML=product;
}