function lerMatriz(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
        const linha = [];
        for (let j = 0; j < tamanho; j++) {
            const valor = Math.floor(Math.random() * 10) + 1;
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

function somaLinha(matriz, linhaIndex) {
    return matriz[linhaIndex].reduce((acc, val) => acc + val, 0);
}

function somaColuna(matriz, colunaIndex) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][colunaIndex];
    }
    return soma;
}

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

function somaTodosElementos(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
    console.log('');
}

function calcularESomarMatriz() {
    // Definindo o tamanho da matriz
    const tamanho = 5;

    // Lendo a matriz M
    const matrizM = lerMatriz(tamanho);

    // Imprimindo a matriz M gerada
    imprimirMatriz(matrizM, 'Matriz M');

    // Calculando as somas
    const somaLinha4 = somaLinha(matrizM, 3); // Índice 3 corresponde à linha 4
    const somaColuna2 = somaColuna(matrizM, 1); // Índice 1 corresponde à coluna 2
    const somaDiagPrincipal = somaDiagonalPrincipal(matrizM);
    const somaTodosElem = somaTodosElementos(matrizM);

    // Exibindo os resultados
    exibirResultados(somaLinha4, somaColuna2, somaDiagPrincipal, somaTodosElem);
}

function exibirResultados(somaLinha4, somaColuna2, somaDiagPrincipal, somaTodosElem) {
    console.log(`Soma da linha 4: ${somaLinha4}`);
    console.log(`Soma da coluna 2: ${somaColuna2}`);
    console.log(`Soma da diagonal principal: ${somaDiagPrincipal}`);
    console.log(`Soma de todos os elementos: ${somaTodosElem}`);
}

// Chamando a função principal para executar o algoritmo
calcularESomarMatriz();
