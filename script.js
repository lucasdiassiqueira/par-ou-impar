const button = document.getElementById('generate');
let generatedNumber; // Variável global para armazenar o número gerado

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(generatedNumber)) {
        generatedNumber = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = generatedNumber;

    console.log("Número gerado:", generatedNumber); // Agora você pode acessar fora do evento
});



