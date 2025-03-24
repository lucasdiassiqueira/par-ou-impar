let currentNumber;

function generateNumber() {
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById("randomNumber").textContent = currentNumber;
}

function checkGuess(choice) {
    const isEven = currentNumber % 2 === 0;
    if ((choice === 'par' && isEven) || (choice === 'impar' && !isEven)) {
        alert("Você acertou!");
    } else {
        alert("Você errou! Tente novamente.");
    }
    generateNumber();
}

// Gera um número aleatório ao iniciar
generateNumber();

