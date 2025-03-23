const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(result)) {
        result = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = result;

     // Exibe os botões para escolher ímpar ou par
     gameButtons.style.display = 'block';
     gameResult.style.display = 'none'; // Esconde a mensagem de resultado anterior
 });
 
 document.getElementById('parButton').addEventListener('click', function() {
     checkGuess('par');
 });
 
 document.getElementById('imparButton').addEventListener('click', function() {
     checkGuess('impar');
 });
 
 function checkGuess(guess) {
     // Verifica se o número gerado é par ou ímpar
     const isEven = generatedNumber % 2 === 0;
 
     // Verifica se o chute está correto
     if ((guess === 'par' && isEven) || (guess === 'impar' && !isEven)) {
         gameMessage.textContent = 'Você acertou!';
     } else {
         gameMessage.textContent = 'Você errou!';
     }
 
     // Exibe o resultado
     gameResult.style.display = 'block';
     gameButtons.style.display = 'none'; // Esconde os botões de jogo
 }