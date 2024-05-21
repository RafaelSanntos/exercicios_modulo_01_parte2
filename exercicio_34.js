// Função para gerar uma matriz 50x50 com números reais aleatórios entre 1 e 10
function gerarMatrizAleatoria() {
    let matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }
    return matriz;
}

// Função para multiplicar cada linha pelo elemento da diagonal principal correspondente
function multiplicarLinhasPelaDiagonalPrincipal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let elementoDiagonalPrincipal = matriz[i][i];
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] *= elementoDiagonalPrincipal;
        }
    }
    return matriz;
}

function exibirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

function main() {
    let matrizOriginal = gerarMatrizAleatoria();

    console.log("Matriz original:");
    exibirMatriz(matrizOriginal);

    // Criar uma cópia da matriz para as operações
    let matriz = matrizOriginal.map(row => [...row]);

    matriz = multiplicarLinhasPelaDiagonalPrincipal(matriz);

    console.log("\nMatriz após as multiplicações:");
    exibirMatriz(matriz);
}

// Chamada da função principal para iniciar o programa
main();
