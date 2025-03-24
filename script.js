let pontos = 0;
let numeroAleatorio = null;

document.getElementById('gerar').addEventListener('click', function() {
    // Gera um número aleatório entre 1 e 100
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    // Exibe o número gerado na tela
    document.getElementById('numero').innerText = `Número gerado: ${numeroAleatorio}`;
    // Limpa o resultado anterior
    document.getElementById('resultado').innerText = ''; 
});

document.getElementById('par').addEventListener('click', function() {
    // Verifica se um número foi gerado antes de permitir a escolha
    if (numeroAleatorio !== null) {
        jogar('par');
    } else {
        alert('Por favor, gere um número primeiro!');
    }
});

document.getElementById('impar').addEventListener('click', function() {
    // Verifica se um número foi gerado antes de permitir a escolha
    if (numeroAleatorio !== null) {
        jogar('impar');
    } else {
        alert('Por favor, gere um número primeiro!');
    }
});

function jogar(escolha) {
    // Verifica se o número gerado é par ou ímpar
    const ehPar = numeroAleatorio % 2 === 0;
    const resultado = ehPar ? 'par' : 'ímpar';

    // Compara a escolha do jogador com o resultado
    if (resultado === escolha) {
        pontos++;
        document.getElementById('resultado').innerText = `Você acertou! O número ${numeroAleatorio} é ${resultado}.`;
    } else {
        pontos--;
        document.getElementById('resultado').innerText = `Você errou! O número ${numeroAleatorio} é ${resultado}.`;
    }

    // Atualiza a pontuação na tela
    document.getElementById('pontos').innerText = `Pontos: ${pontos}`;
}
