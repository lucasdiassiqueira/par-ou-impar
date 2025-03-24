const button = document.getElementById('generate');

button.addEventListener('click', function() {
    let generatedNumber; // Declara a variável dentro do escopo da função

    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (!isNaN(min) && !isNaN(max) && min <= max) {
        generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        generatedNumber = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = generatedNumber;
    console.log("Número gerado:", generatedNumber); // Verifica se a variável está funcionando
});



