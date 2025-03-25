let currentNumber;

function generateNumber() {
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById("randomNumber").textContent = currentNumber;
}

function checkGuess(choice) {
    const isEven = currentNumber % 2 === 0;
    const resultBox = document.getElementById("resultBox");
    if ((choice === 'par' && isEven) || (choice === 'impar' && !isEven)) {
        resultBox.textContent = "Einstein? slk, acertou!";
        resultBox.style.color = "green";
        resultBox.style.backgroundColor = "white";
    } else {
        resultBox.textContent = "'Jênio'! Tente novamente.";
        resultBox.style.color = "red";
        resultBox.style.backgroundColor = "white";
    }
    generateNumber();
}


generateNumber();
createStars();

// estrelas
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
        const duration = Math.random() * 2 + 1; 

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = positionX;
        star.style.top = positionY;
        star.style.animationDuration = `${duration}s`;

        starField.appendChild(star);
    }
}