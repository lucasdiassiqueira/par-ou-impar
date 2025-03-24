let pontos = 0;
let numeroAleatorio = null;

document.getElementById('gerar').addEventListener('click', function() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById('numero').innerText = `Número gerado: ${numeroAleatorio}`;
    document.getElementById('resultado').innerText = ''; // Limpa o resultado anterior
});

document.getElementById('par').addEventListener('click', function() {
    if (numeroAleatorio !== null) {
        jogar('par');
    } else {
        alert('Por favor, gere um número primeiro!');
    }
});

document.getElementById('impar').addEventListener('click', function() {
    if (numeroAleatorio !== null) {
        jogar('impar');
    } else {
        alert('Por favor, gere um número primeiro!');
    }
});

function jogar(escolha) {
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



