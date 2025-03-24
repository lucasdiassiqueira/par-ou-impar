let currentNumber;

function generateNumber() {
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById("randomNumber").textContent = currentNumber;
}

function checkGuess(choice) {
    const isEven = currentNumber % 2 === 0;
    const resultBox = document.getElementById("resultBox");
    if ((choice === 'par' && isEven) || (choice === 'impar' && !isEven)) {
        resultBox.textContent = "Você acertou!";
        resultBox.style.color = "green";
    } else {
        resultBox.textContent = "Você errou! Tente novamente.";
        resultBox.style.color = "red";
    }
    generateNumber();
}

// Gera um número aleatório ao iniciar
generateNumber();
