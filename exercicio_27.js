// Definindo o tamanho da matriz e o valor de A
const tamanho = 6;
const valorA = 5;

function lerMatriz(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
        const linha = [];
        for (let j = 0; j < tamanho; j++) {
            // gerando valores aleatórios para a matriz
            const valor = Math.floor(Math.random() * 10) + 1;
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

function multiplicarMatrizPorValor(matriz, valor) {
    const vetor = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetor.push(matriz[i][j] * valor);
        }
    }
    return vetor;
}

function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
    console.log('');
}

function imprimirVetor(vetor) {
    console.log("Vetor V:");
    console.log(vetor.join(', '));
}

function imprimirValorA(valorA){
    console.log(`Valor A: ${valorA}\n`)
}

// Chamando funções
imprimirValorA(valorA);
const matrizM = lerMatriz(tamanho);

imprimirMatriz(matrizM, 'Matriz M');
const vetorV = multiplicarMatrizPorValor(matrizM, valorA);

imprimirVetor(vetorV);
