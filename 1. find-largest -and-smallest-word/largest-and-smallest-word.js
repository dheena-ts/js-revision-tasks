function findWordsAndDisplay() {
    const error = document.getElementById('errorDiv')
    const inputElement = document.getElementById('userInput');
    const sentence = inputElement.value;

    if (!sentence) {
        error.innerHTML="Please enter a input"
        return;
    }

   
    const words = sentence.match(/\w+/g); 

    if (!words || words.length === 0) {
        error.innerHTML="No words found in the input"
        return;
    }

    let smallestWord = words[0];
    let largestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];

       
        if (currentWord.length < smallestWord.length) {
            smallestWord = currentWord;
        }

        
        if (currentWord.length > largestWord.length) {
            largestWord = currentWord;
        }
    }

   
    document.getElementById('largestDiv').textContent = `Largest word: ${largestWord}`;
    document.getElementById('smallestDiv').textContent = `Smallest word: ${smallestWord}`;
}
