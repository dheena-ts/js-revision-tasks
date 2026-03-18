let countdownInterval;

function startTimer() {
    clearInterval(countdownInterval);

    const inputElement = document.getElementById('secondsInput');
    let remainingTime = parseInt(inputElement.value);
    const displayElement = document.getElementById('timerDisplay');

    if (isNaN(remainingTime) || remainingTime <= 0) {
        displayElement.textContent = "Please enter a valid number of seconds.";
        return;
    }

    displayElement.textContent = remainingTime;

    countdownInterval = setInterval(function () {
        remainingTime--;

        if (remainingTime > 0) {
            displayElement.textContent = remainingTime;
        }
    }, 1000);
}
