const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(result)) {
        result = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = result;
});

const button = document.getElementById('generate');
const parButton = document.getElementById('parButton');
const imparButton = document.getElementById('imparButton');
const gameResult = document.getElementById('gameResult');
const gameMessage = document.getElementById('gameMessage');

let generatedNumber;

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(generatedNumber)) {
        generatedNumber = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = generatedNumber;
    gameResult.style.display = 'none'; // Esconde o resultado do jogo ao gerar um novo número
});

parButton.addEventListener('click', function() {
    checkGuess('par');
});

imparButton.addEventListener('click', function() {
    checkGuess('impar');
});

function checkGuess(guess) {
    if (generatedNumber === undefined) {
        gameMessage.textContent = 'Por favor, gere um número primeiro!';
        gameResult.style.display = 'block';
        return;
    }

    const isEven = generatedNumber % 2 === 0;
    const isGuessEven = guess === 'par';

    if (isGuessEven && isEven) {
        gameMessage.textContent = 'Você acertou! O número ' + generatedNumber + ' é par.';
    } else if (!isGuessEven && !isEven) {
        gameMessage.textContent = 'Você acertou! O número ' + generatedNumber + ' é ímpar.';
    } else {
        gameMessage.textContent = 'Você errou! O número ' + generatedNumber + ' é ' + (isEven ? 'par.' : 'ímpar.');
    }

    gameResult.style.display = 'block'; // Mostra o resultado do jogo
}