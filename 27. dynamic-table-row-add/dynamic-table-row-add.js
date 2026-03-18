function addRow(){
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const nameValue = nameInput.value;
    const ageValue = ageInput.value;

    if(nameInput === '' || ageInput === ''){
        alert('Please enter the input')
        return
    }

    const tableBody = document.querySelector('#dataTable tbody');
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.innerHTML = nameValue;
    cell2.innerHTML = ageValue;


    nameInput.value = '';
    ageInput.value = '';

}