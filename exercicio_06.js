const prompt = require('prompt-sync')(); // Biblioteca que recebe o input do usuário no Node.js

function obterEscolhaDoJogador(mensagem) {
    while(true) {
        const userInput = prompt(mensagem);
        
        // Verifica se a string contém apenas dígitos numéricos inteiros de 1 até 5
        if(/^\d+$/.test(userInput) && userInput >= 1 && userInput <= 5) {
            const input = parseInt(userInput); // Converte a string para int
            console.clear();
            return input;
        }

        console.clear();
        console.log("Por favor, digite apenas um número inteiro de 1 até 5. Tente novamente!");
    }
}

function sorterNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

function exibirResultado(numeroEscolhido, numeroSorteado) {
    if (numeroEscolhido === numeroSorteado) {
        console.log(`Número sorteado: ${numeroSorteado}\n`);
        console.log("Parabéns! Você acertou o número sorteado.");
    } else {
        console.log(`Número sorteado: ${numeroSorteado}\n`);
        console.log("Que pena! Você errou o número sorteado.");
    }
}

// Chamando as funções
const numeroEscolhido = obterEscolhaDoJogador("Digite um número inteiro de 1 até 5 para participar do sorteio: ");
const numeroSorteado = sorterNumero();
exibirResultado(numeroEscolhido, numeroSorteado);
