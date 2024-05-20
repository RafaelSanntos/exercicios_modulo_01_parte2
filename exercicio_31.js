const tamanhoMatrizV = 30;

function gerarMatrizAleatoria(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
        const linha = [];
        for (let j = 0; j < tamanho; j++) {
            const valor = Math.floor(Math.random() * 10); // Gerando valores aleatórios entre 0 e 9
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

function contarElementosIguais(matriz, elemento) {
    let contador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === elemento) {
                contador++;
            }
        }
    }
    return contador;
}

function criarMatrizX(matriz, elemento) {
    const matrizX = [];
    for (let i = 0; i < matriz.length; i++) {
        const linhaX = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] !== elemento) {
                linhaX.push(matriz[i][j]);
            }
        }
        if (linhaX.length > 0) {
            matrizX.push(linhaX);
        }
    }
    return matrizX;
}

function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
    console.log('');
}

function processarMatriz(A, matrizV) {
    // Contar quantos valores iguais a A estão na matriz V
    const quantidadeA = contarElementosIguais(matrizV, A);
    console.log(`Quantidade de valores iguais a ${A} na matriz V: ${quantidadeA}\n`);

    // Criar matriz X com elementos diferentes de A
    const matrizX = criarMatrizX(matrizV, A);
    imprimirMatriz(matrizX, 'Matriz X (Elementos diferentes de A)');
}

function imprimirValorA(valorA) {
    console.log(`Valor A: ${valorA}\n`)
}

const matrizV = gerarMatrizAleatoria(tamanhoMatrizV);

// Número inteiro A (número aleatório entre 0 e 9)
const A = Math.floor(Math.random() * 10);

// Imprimindo valor de A
imprimirValorA(A)

// Imprimindo matriz V gerada
imprimirMatriz(matrizV, 'Matriz V');

// Processando matriz V conforme o número inteiro A
processarMatriz(A, matrizV);
