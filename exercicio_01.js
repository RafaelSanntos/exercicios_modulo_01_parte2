const prompt = require('prompt-sync')(); // Biblioteca que recebe o input do usuário no Node.js

function obterDados(mensagem, mensagem2) {
    let input; // Declarei a variável fora do loop para que ela possa ser acessada e retornada pelo segundo while loop uma vez que variáveis criadas dentro de loops só podem ser acessadas dentro do próprio.

    while(true) {
        const userInput = prompt(mensagem);
        
        // Verifica se a string contém apenas dígitos numéricos inteiros
        if(/^\d+$/.test(userInput)) {
            input = parseInt(userInput); // Converte a string para int
            console.clear();
            break;
        }

        console.clear();
        console.log("Por favor, digite apenas números inteiros. Tente novamente!");
    }

    while(true) {
        const userInput2 = prompt(mensagem2);
        
        // Verifica se a string contém apenas dígitos numéricos inteiros
        if(/^\d+$/.test(userInput2)) {
            const input2 = parseInt(userInput2); // Converte a string para int
            console.clear();

            // Guardando os valores em uma Array e retornando ela
            return [input, input2];
        }

        console.clear();
        console.log("Por favor, digite apenas números inteiros. Tente novamente!");
    }
}

function calcularPerdasDeDiasDeVida(cigarrosPorDia, anosFumados) {
    const perdasDeDiasDeVida = cigarrosPorDia * anosFumados;
    return perdasDeDiasDeVida;
}

function exibirResultado(resultado) {
    console.log("Perdas de dias de vida devido ao tabagismo:", resultado);
}

// Chamando a função obterDados() e armazenando os valores dos indices do Array retornado em variáveis.
const [cigarrosPorDia, anosFumados] = obterDados("Digite a quantidade de cigarros fumados por dia (apenas números inteiros!): ", "Digite o período de anos durante os quais você fumou (apenas números inteiros!): ");

// Chamando a função calcularPerdasDeDiasDeVida()
const resultado = calcularPerdasDeDiasDeVida(cigarrosPorDia, anosFumados);

// Chamando a função exibirResultado()
exibirResultado(resultado);
