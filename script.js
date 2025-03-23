const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const Min= parseInt(document.getElementById('Min').value);
    const Max= parseInt(document.getElementById('max').value);

    let result =  Math.floor(Math.random() * (Max - Min + 1)) + Min

    if (isNaN(result)) {
        result = 'Valor Inválido';
    }

    document.querySelector('#result > Span').textContent = result;

})
