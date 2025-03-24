let pontos = 0;

document.getElementById('par').addEventListener('click', function() {
    jogar('par');
});

document.getElementById('impar').addEventListener('click', function() {
    jogar('impar');
});

function jogar(escolha) {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const ehPar = numeroAleatorio % 2 === 0;
    const resultado = ehPar ? 'par' : 'ímpar';

    if (resultado === escolha) {
        pontos++;
        document.getElementById('resultado').innerText = `Você acertou! O número ${numeroAleatorio} é ${resultado}.`;
    } else {
        pontos--;
        document.getElementById('resultado').innerText = `Você errou! O número ${numeroAleatorio} é ${resultado}.`;
    }

    document.getElementById('pontos').innerText = `Pontos: ${pontos}`;
}




