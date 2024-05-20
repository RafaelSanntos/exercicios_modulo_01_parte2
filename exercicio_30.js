function lerMatriz(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
        const linha = [];
        for (let j = 0; j < tamanho; j++) {
            const valor = Math.floor(Math.random() * 10) + 1; // Gerando valores aleatórios entre 1 e 10
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

function calcularSomaLinhas(matriz) {
    const somaLinhas = [];
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        somaLinhas.push(soma);
    }
    return somaLinhas;
}

function calcularSomaColunas(matriz) {
    const somaColunas = [];
    for (let j = 0; j < matriz[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < matriz.length; i++) {
            soma += matriz[i][j];
        }
        somaColunas.push(soma);
    }
    return somaColunas;
}

function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
    console.log('');
}

function imprimirVetor(vetor, nome) {
    console.log(`${nome}: ${vetor.join(' ')}`);
}

function processarMatriz() {
    const tamanho = 5;
    const matrizM = lerMatriz(tamanho);
    imprimirMatriz(matrizM, 'Matriz M');

    const somaLinhas = calcularSomaLinhas(matrizM);
    const somaColunas = calcularSomaColunas(matrizM);

    imprimirVetor(somaLinhas, 'Vetor SL (Soma das Linhas)');
    imprimirVetor(somaColunas, 'Vetor SC (Soma das Colunas)');
}

// Chamando a função principal para executar o algoritmo
processarMatriz();
