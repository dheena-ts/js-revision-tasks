const passwordInput = document.getElementById('password')
const error = document.getElementById('errorDiv')
const strengthText = document.getElementById('strength')

const checklistItems = {
    len: document.getElementById('len'),
    up: document.getElementById('up'),
    low: document.getElementById('low'),
    num: document.getElementById('num'),
    special: document.getElementById('special')
};

const strengthIndicator = document.querySelector('strengthIndicator');

passwordInput.addEventListener('input', updatePasswordStrength);

function updatePasswordStrength() {
    const value = passwordInput.value;
    errorDiv.textContent = '';

    const criteria = {
        len: { regex: /.{8,}/, element: checklistItems.len },
        up: { regex: /[A-Z]/, element: checklistItems.up },
        low: { regex: /[a-z]/, element: checklistItems.low },
        num: { regex: /[0-9]/, element: checklistItems.num },
        special: { regex: /[^A-Za-z0-9]/, element: checklistItems.special }
    };

    let passedCount = 0;

    for (const key in criteria) {
        const item = criteria[key];
        const isValid = item.regex.test(value);

        if (isValid) {
            item.element.classList.remove('invalid');
            item.element.classList.add('valid');
            item.element.innerHTML = 'Valid' + item.element.textContent.substring(2); 
            passedCount++;
        } else {
            item.element.classList.remove('valid');
            item.element.classList.add('invalid');
            item.element.innerHTML = 'Invalid' + item.element.textContent.substring(2);
        }
    }

    let strength = '';
    strengthIndicator.classList.remove('weak', 'medium', 'strong');

    if (passedCount === 5) {
        strength = 'Strong';
        strengthIndicator.classList.add('strong');
    } else if (passedCount >= 3) {
        strength = 'Medium';
        strengthIndicator.classList.add('medium');
    } else if (value.length > 0) {
        strength = 'Weak';
        strengthIndicator.classList.add('weak');
    } else {
        strength = 'Weak';
    }

    strengthText.textContent = strength;

}
