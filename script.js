document.getElementById('generate').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultElement = document.getElementById('result').querySelector('span');

    // Verifica se os valores são válidos
    if (isNaN(min) || isNaN(max) || min > max) {
        resultElement.textContent = 'Valores inválidos!';
        resultElement.style.color = '#e74c3c'; // Vermelho para erro
        return;
    }

    // Gera o número aleatório
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = randomNumber;
    resultElement.style.color = '#2b4bd9'; // Cor do número gerado
});