document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');

    let history = [''];
    let currentStateIndex = 0;

    function updateHistory(value) {
        if (currentStateIndex < history.length - 1) {
            history = history.slice(0, currentStateIndex + 1);
        }
        history.push(value);
        currentStateIndex++;
        updateButtonStates();
    }

    function undo() {
        if (currentStateIndex > 0) {
            currentStateIndex--;
            textInput.value = history[currentStateIndex];
            updateButtonStates();
        }
    }

    function redo() {
        if (currentStateIndex < history.length - 1) {
            currentStateIndex++;
            textInput.value = history[currentStateIndex];
            updateButtonStates();
        }
    }

    function updateButtonStates() {
        undoBtn.disabled = currentStateIndex === 0;
        redoBtn.disabled = currentStateIndex === history.length - 1;
    }

    textInput.addEventListener('input', (e) => {
        updateHistory(e.target.value);
    });

    undoBtn.addEventListener('click', undo);
    redoBtn.addEventListener('click', redo);

    updateButtonStates();
});
