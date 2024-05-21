// Função para verificar se um número é par
function ehPar(num) {
    return num % 2 === 0;
}

// Função para exibir e esvaziar um vetor
function exibirEVaziarVetor(vetor, tipo) {
    console.log(`Vetor ${tipo}: [${vetor.join(', ')}]`);
    vetor.length = 0; // Esvazia o vetor
}

// Função principal para executar o algoritmo
function main() {
    const valores = Array.from({length: 30}, () => Math.floor(Math.random() * 100)); // Gerando 30 valores aleatórios entre 0 e 99

    // Exibir os 30 valores gerados
    console.log("Valores gerados:");
    console.log(valores.join(', '));
    console.log("\n");

    let pares = [];
    let impares = [];

    for (let valor of valores) {
        if (ehPar(valor)) {
            pares.push(valor);
            if (pares.length === 5) {
                exibirEVaziarVetor(pares, 'Pares');
            }
        } else {
            impares.push(valor);
            if (impares.length === 5) {
                exibirEVaziarVetor(impares, 'Ímpares');
            }
        }
    }

    // Exibir quaisquer valores restantes nos vetores
    if (pares.length > 0) {
        exibirEVaziarVetor(pares, 'Pares');
    }
    if (impares.length > 0) {
        exibirEVaziarVetor(impares, 'Ímpares');
    }
}

// Chamada da função principal para iniciar o programa
main();
