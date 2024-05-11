const prompt = require('prompt-sync')(); // Biblioteca que recebe o input do usuário no Node.js

function obterDados(...mensagens) {
    const inputs = [];

    for (const mensagem of mensagens) {
        while (true) {
            const userInput = prompt(mensagem);
            
            // Verifica se a string contém apenas dígitos numéricos inteiros
            if (/^\d+$/.test(userInput)) {
                const input = parseInt(userInput); // Converte a string para int
                console.clear();
                inputs.push(input); // Adiciona o valor do input ao array inputs
                break;
            }

            console.clear();
            console.log("Por favor, digite apenas números inteiros. Tente novamente!");
        }
    }

    return inputs;
}

function calcularPerdasDeDiasDeVida(cigarrosPorDia, anosFumados) {
    const perdasDeDiasDeVida = cigarrosPorDia * anosFumados;
    return perdasDeDiasDeVida;
}

function exibirResultado(resultado) {
    console.log("Perdas de dias de vida devido ao tabagismo:", resultado);
}

// Chamando a função obterDados() e armazenando os valores dos indices do Array retornado em variáveis.
const [cigarrosPorDia, anosFumados] = obterDados(
    "Digite a quantidade de cigarros fumados por dia (apenas números inteiros!): ",
    "Digite o período de anos durante os quais você fumou (apenas números inteiros!): "
);

// Chamando a função calcularPerdasDeDiasDeVida()
const resultado = calcularPerdasDeDiasDeVida(cigarrosPorDia, anosFumados);

// Chamando a função exibirResultado()
exibirResultado(resultado);
