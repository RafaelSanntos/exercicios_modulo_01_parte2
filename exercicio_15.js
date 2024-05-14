const prompt = require('prompt-sync')();

function obterNumeros() {
    const numerosArray = [];
    for (let i = 0; i < 10; i++) {
        while(true) {
            const input = prompt(`Digite o ${i + 1}º número inteiro: `);
            if (/^\d+$/.test(input)) {
                numerosArray.push(parseInt(input));
                console.clear();
                break;
            } else {
                console.clear();
                console.log("Por favor, digite apenas números inteiros.");
            }
        }
    }
    return numerosArray;
}

function verificarNumerosPares(numerosArray) {
    const numerosPares = [];
    for (const numero of numerosArray) {
        if (numero % 2 === 0) {
            numerosPares.push(numero);
        }
    }
    return numerosPares;
}

function verificarPosicaoArray(numero, numerosArray) {
    const posicoes = [];
    for (let i = 0; i < numerosArray.length; i++) {
        if (numerosArray[i] === numero) {
            posicoes.push(i);
        }
    }
    return posicoes;
}

function exibirResultados(numerosPares, numerosArray) {
    console.log("Números pares digitados:", numerosPares);
    console.log("\nPosições no vetor:\n");
    for (const numero of numerosPares) {
        const posicoes = verificarPosicaoArray(numero, numerosArray);
        console.log(`${numero} está na posição: ${posicoes.join(', ')}`);
    }
}

// Chamando as funções
const numerosArray = obterNumeros();
const numerosPares = verificarNumerosPares(numerosArray);
exibirResultados(numerosPares, numerosArray);
