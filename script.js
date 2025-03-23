document.getElementById('generate').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultElement = document.getElementById('result').querySelector('span');

    if (isNaN(min) || isNaN(max) || min > max) {
        resultElement.textContent = 'Valores inválidos!';
        resultElement.style.color = '#e74c3c';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = randomNumber;
    resultElement.style.color = '#2b4bd9';
});
