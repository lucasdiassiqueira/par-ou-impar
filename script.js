let currentNumber;

function generateNumber() {
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById("randomNumber").textContent = currentNumber;
}

function checkGuess(choice) {
    const isEven = currentNumber % 2 === 0;
    const resultMessage = document.getElementById("resultMessage");
    
    if ((choice === 'par' && isEven) || (choice === 'impar' && !isEven)) {
        resultMessage.textContent = "Você acertou!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Você errou! Tente novamente.";
        resultMessage.style.color = "red";
    }
    
    resultMessage.style.visibility = "visible"; // Torna a mensagem visível
    generateNumber(); // Gera um novo número após a verificação
}

// Gera um número aleatório ao iniciar
generateNumber();