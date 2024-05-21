// Função para gerar uma matriz 3x3 com números aleatórios entre 1 e 10
function gerarMatrizAleatoria() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1; // Números aleatórios de 1 a 10
        }
    }
    return matriz;
}

function calcularMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i]; // A diagonal secundária na posição [i][2-i]
    }
    let media = soma / 3;
    return media;
}

function multiplicarDiagonalPrincipal(matriz, media) {
    let resultado = 1; // Começa com 1 pois vamos fazer multiplicação
    for (let i = 0; i < 3; i++) {
        resultado *= matriz[i][i]; // A diagonal principal na posição [i][i]
    }

    let resultadoFinal = resultado * media;
    return resultadoFinal;
}

function main() {

    let matriz = gerarMatrizAleatoria();

    let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);

    let resultadoMultiplicacao = multiplicarDiagonalPrincipal(matriz, mediaDiagonalSecundaria);

    console.log("Matriz gerada aleatoriamente:");
    console.table(matriz);
    console.log(`A média da diagonal secundária é: ${mediaDiagonalSecundaria}`);
    console.log(`O resultado da multiplicação dos elementos da diagonal principal pela média da diagonal secundária é: ${resultadoMultiplicacao}`);
}

// Chamada da função principal para iniciar o programa
main();
