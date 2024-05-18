function criarMatrizIdentidade(dimensao) {
    let matriz = [];
    
    // Criar a matriz quadrada com dimensão x dimensão
    for (let i = 0; i < dimensao; i++) {
        matriz[i] = [];
        for (let j = 0; j < dimensao; j++) {
            // Preencher a diagonal principal com 1 e os demais com 0
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }
    
    return matriz;
}

function exibirMatriz(matriz) {
    const dimensao = matriz.length;
    
    for (let i = 0; i < dimensao; i++) {
        let linha = "";
        for (let j = 0; j < dimensao; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

function main() {
    console.log("Matriz Identidade MI[1..7,1..7]:");
    let matrizIdentidade = criarMatrizIdentidade(7);
    exibirMatriz(matrizIdentidade);
}

// Chamando a função principal
main();
