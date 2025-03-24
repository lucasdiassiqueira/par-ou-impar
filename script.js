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
createStars();

// Função para criar estrelas
function createStars() {
    const starField = document.createElement("div");
    starField.classList.add("stars");
    document.body.appendChild(starField);
    
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 3 + 1;
        const positionX = Math.random() * 100 + "%";
        const positionY = Math.random() * 100 + "%";
        const duration = Math.random() * 2 + 1;  // Duração da animação de brilho

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = positionX;
        star.style.top = positionY;
        star.style.animationDuration = `${duration}s`;

        starField.appendChild(star);
    }
}