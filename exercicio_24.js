function criarMatriz() {
    // Criar uma matriz com valores fictícios para testar
    let matriz = [
        [1, -2, 3, -4, 5, 6, -7, 8],
        [-1, 2, -3, 4, -5, 6, 7, 8],
        [1, 2, 3, 4, 5, -6, 7, 8],
        [-1, 2, 3, 4, 5, 6, -7, 8],
        [1, 2, 3, -4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8]
    ];

    return matriz;
}

function contarNegativosPorLinha(matriz) {
    let vetorC = [];

    // Iterar sobre cada linha da matriz
    for (let i = 0; i < matriz.length; i++) {
        let contadorNegativos = 0;
        // Iterar sobre cada elemento da linha
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                contadorNegativos++;
            }
        }
        // Adicionar a contagem de negativos para a linha atual no vetor C
        vetorC.push(contadorNegativos);
    }

    return vetorC;
}

function exibirMatriz(matriz) {
    console.log("Matriz M[1..6,1..8]:");
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

function exibirVetorC(vetorC) {
    console.log("\nVetor C com a quantidade de elementos negativos por linha:");
    for (let i = 0; i < vetorC.length; i++) {
        console.log(`Linha ${i + 1}: ${vetorC[i]} elementos negativos`);
    }
}

function main() {
    let matriz = criarMatriz();
    let vetorC = contarNegativosPorLinha(matriz);
    
    exibirMatriz(matriz);
    exibirVetorC(vetorC);
}

// Executar o programa principal
main();
