const prompt = require('prompt-sync')();

// Função para ler um número do usuário com validação
function lerNumero() {
    let numero;
    do {
        numero = prompt("Digite um número:");
        numero = parseFloat(numero); // Convertendo para número decimal
        if (isNaN(numero)) {
            console.clear();
            console.log("Por favor, insira um número válido.");
        }
    } while (isNaN(numero)); // Continua pedindo um número até que seja digitado um número válido
    return numero;
}

// Função para validar se o usuário deseja continuar
function validarContinuar() {
    let resposta;
    do {
        resposta = prompt("Deseja continuar? (Digite 's' para sim ou 'n' para não)").toLowerCase();
        if (resposta !== 's' && resposta !== 'n') {
            console.clear();
            console.log("Por favor, digite 's' para sim ou 'n' para não.");
        }
    } while (resposta !== 's' && resposta !== 'n');
    return resposta;
}

// Função principal que realiza o programa
function exibirResultado() {
    let continuar;
    let soma = 0;
    let menorValor = Infinity;
    let contadorPares = 0;
    let quantidadeNumeros = 0;

    do {
        let numero = lerNumero();
        soma += numero;
        quantidadeNumeros++;
        if (numero < menorValor) {
            menorValor = numero;
        }
        if (numero % 2 === 0) {
            contadorPares++;
        }
        continuar = validarContinuar();
    } while (continuar === 's');

    const media = soma / quantidadeNumeros;

    console.log("a) O somatório entre todos os valores: " + soma);
    console.log("b) Qual foi o menor valor digitado: " + menorValor);
    console.log("c) A média entre todos os valores: " + media);
    console.log("d) Quantos valores são pares: " + contadorPares);
}

// Chama a função exibirResultado para iniciar o programa
exibirResultado();
