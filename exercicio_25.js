// Função para criar e retornar uma matriz de números reais 15x20 com valores aleatórios entre -50 e 50
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 15; i++) {
        matriz[i] = [];
        for (let j = 0; j < 20; j++) {
            matriz[i][j] = Math.random() * 100 - 50; // números aleatórios entre -50 e 50
        }
    }
    return matriz;
}

function calcularSomasColunas(matriz) {
    let somasColunas = new Array(20).fill(0);
    for (let j = 0; j < 20; j++) { // percorre cada coluna
        for (let i = 0; i < 15; i++) { // percorre cada linha da coluna j
            somasColunas[j] += matriz[i][j];
        }
    }
    
    return somasColunas;
}

function exibirMatriz(matriz) {
    console.log("Matriz 15x20:");
    for (let i = 0; i < 15; i++) {
        let linha = "";
        for (let j = 0; j < 20; j++) {
            linha += matriz[i][j].toFixed(2) + "\t";
        }
        console.log(linha);
    }
}

function exibirSomasColunas(somasColunas) {
    console.log("\nSomas de cada coluna:");
    for (let j = 0; j < 20; j++) {
        console.log(`Coluna ${j + 1}: ${somasColunas[j].toFixed(2)}`);
    }
}

function main() {
    let matriz = criarMatriz();
    let somasColunas = calcularSomasColunas(matriz);
    
    exibirMatriz(matriz);
    exibirSomasColunas(somasColunas);
}

// Chamando função principal
main();
