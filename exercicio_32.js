function lerMatrizAleatoria(rows, cols) {
    const matriz = [];
    for (let i = 0; i < rows; i++) {
        const linha = [];
        for (let j = 0; j < cols; j++) {
            const valor = Math.floor(Math.random() * 20) - 10; // Números aleatórios entre -10 e 9
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

function encontrarMaiorElementoModulo(linha) {
    let maiorAbsoluto = Math.abs(linha[0]);
    for (let j = 1; j < linha.length; j++) {
        const absValor = Math.abs(linha[j]);
        if (absValor > maiorAbsoluto) {
            maiorAbsoluto = absValor;
        }
    }
    return maiorAbsoluto;
}

function modificarMatriz(matriz) {
    const matrizModificada = [];
    const maioresElementosModulo = [];

    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i];
        const maiorAbsoluto = encontrarMaiorElementoModulo(linha);
        maioresElementosModulo.push(maiorAbsoluto);

        const linhaModificada = linha.map(valor => valor / maiorAbsoluto);
        matrizModificada.push(linhaModificada);
    }

    return { matrizModificada, maioresElementosModulo };
}

function arredondarMatriz(matriz, casasDecimais) {
    const matrizArredondada = matriz.map(linha => {
        return linha.map(valor => Number(valor.toFixed(casasDecimais)));
    });
    return matrizArredondada;
}

function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
    console.log('');
}

function imprimirMaioresElementos(maioresElementosModulo) {
    console.log('Maiores elementos em módulo de cada linha (ignorando se são positivos ou negativos na Matriz M):');
    for (let i = 0; i < maioresElementosModulo.length; i++) {
        console.log(`Linha ${i + 1}: ${maioresElementosModulo[i]}`);
    }
    console.log('');
}

function processarMatriz() {
    const rows = 12;
    const cols = 13;

    // Gerando matriz M aleatória para fins de exemplo
    const matrizM = lerMatrizAleatoria(rows, cols);

    // Imprimindo matriz M original
    imprimirMatriz(matrizM, 'Matriz M (Original)');

    // Modificando a matriz M conforme especificado
    const { matrizModificada, maioresElementosModulo } = modificarMatriz(matrizM);

    // Imprimindo maiores elementos em módulo de cada linha
    imprimirMaioresElementos(maioresElementosModulo);

    // Arredondando a matriz M modificada para 4 casas decimais
    const matrizModificadaArredondada = arredondarMatriz(matrizModificada, 4);

    // Imprimindo matriz M modificada arredondada
    imprimirMatriz(matrizModificadaArredondada, 'Matriz M (Modificada e Arredondada)');
}

// Chamando a função principal para executar o algoritmo
processarMatriz();
