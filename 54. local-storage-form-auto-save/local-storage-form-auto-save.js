function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formData = {
        name: name,
        email: email,
        message: message
    };
    localStorage.setItem('autosaveForm', JSON.stringify(formData));
}

function restoreFormData() {
    const storedData = localStorage.getItem('autosaveForm');
    if (storedData) {
        const formData = JSON.parse(storedData);
        document.getElementById('name').value = formData.name || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('message').value = formData.message || '';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    restoreFormData();
    document.getElementById('name').addEventListener('input', saveFormData);
    document.getElementById('email').addEventListener('input', saveFormData);
    document.getElementById('message').addEventListener('input', saveFormData);

    document.getElementById('myForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Data saved');
        document.getElementById('myForm').reset();
    });

    document.getElementById('clearStorage').addEventListener('click', () => {
        localStorage.removeItem('autosaveForm');
        document.getElementById('myForm').reset();
        alert('Local storage data has been cleared');
    });
});