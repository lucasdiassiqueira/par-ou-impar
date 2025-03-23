function getRandomNumber() {
    const min = parseInt(prompt("Digite o valor mínimo:"));
    const max = parseInt(prompt("Digite o valor máximo:"));
    
    if (isNaN(min) || isNaN(max) || min > max) {
        alert("Valores inválidos. Certifique-se de que são números e que o mínimo é menor que o máximo.");
        return null;
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exemplo de uso
console.log(getRandomNumber());
