const linhas = 3;
const colunas = 5;
const valorMinimo = 1;
const valorMaximo = 10;

function gerarMatrizAleatoria(linhas, colunas, valorMinimo, valorMaximo) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            const valorAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
            linha.push(valorAleatorio);
        }
        matriz.push(linha);
    }
    return matriz;
}

function produtoHadamard(matrizA, matrizB) {
    const linhas = matrizA.length;
    const colunas = matrizA[0].length;
    const matrizProduto = [];
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(matrizA[i][j] * matrizB[i][j]);
        }
        matrizProduto.push(linha);
    }
    return matrizProduto;
}

function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`);
    matriz.forEach(linha => {
        console.log(linha.join(' '));
    });
    console.log('');
}

// Chamando as funções
const matrizA = gerarMatrizAleatoria(linhas, colunas, valorMinimo, valorMaximo);
const matrizB = gerarMatrizAleatoria(linhas, colunas, valorMinimo, valorMaximo);
const matrizProduto = produtoHadamard(matrizA, matrizB);

imprimirMatriz(matrizA, 'Matriz A');
imprimirMatriz(matrizB, 'Matriz B');
imprimirMatriz(matrizProduto, 'Matriz Produto P (Hadamard)');
