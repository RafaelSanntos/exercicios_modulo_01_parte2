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

function somaAcimaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = i + 1; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function somaAbaixoDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 1; i < matriz.length; i++) {
        for (let j = 0; j < i; j++) {
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
    const tamanho = 10;
    const matrizM = lerMatriz(tamanho);

    imprimirMatriz(matrizM, 'Matriz M');

    const somaAcimaDiag = somaAcimaDiagonalPrincipal(matrizM);
    const somaAbaixoDiag = somaAbaixoDiagonalPrincipal(matrizM);

    exibirResultados(somaAcimaDiag, somaAbaixoDiag);
}

function exibirResultados(somaAcimaDiag, somaAbaixoDiag) {
    console.log(`Soma dos elementos acima da diagonal principal: ${somaAcimaDiag}`);
    console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiag}`);
}

// Chamando a função 
calcularESomarMatriz();
