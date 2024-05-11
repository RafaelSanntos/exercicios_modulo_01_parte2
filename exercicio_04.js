const prompt = require('prompt-sync')(); // Biblioteca que recebe o input do usuário no Node.js

function obterTamanhoRetas() {
    const retas = [];

    for (let i = 1; i <= 3; i++) {
        let reta;
        while (true) {
            const userInput = prompt(`Digite o tamanho da reta ${i}: `);
        
            // Verifica se a string contém apenas dígitos numéricos inteiros
            if (/^\d+$/.test(userInput)) {
                reta = parseInt(userInput); // Converte a string para int
                if (reta > 0) {
                    break; // Sai do loop se o valor for positivo
                }
            }
            console.clear();
            console.log("Por favor, digite apenas números inteiros positivos. Tente novamente!");
        }
        retas.push(reta); // Adiciona o valor da reta ao array retas
    }

    return retas;
}

function verificarSeFormaTriangulo(retaA, retaB, retaC) {
    return retaA < retaB + retaC && retaB < retaA + retaC && retaC < retaA + retaB; // Retornar um boolean
}

function exibirResultadoFormacaoTriangulo(retaA, retaB, retaC) {
    if (verificarSeFormaTriangulo(retaA, retaB, retaC)) {
        console.clear();
        console.log(`Tamanho das retas inseridas:
reta 1: ${retaA}
reta 2: ${retaB}
reta 3: ${retaC}\n`)
        console.log("É possível formar um triângulo com essas retas.");
    } else {
        console.clear();
        console.log(`Tamanho das retas inseridas:
        reta A: ${retaA}
        reta B: ${retaB}
        reta C: ${retaC}\n`)
        console.log("Não é possível formar um triângulo com essas retas. Pois para formar um triângulo o comprimento de cada lado deve ser menor que a soma dos outros dois.");
    }
}

// Chamando a função obterTamanhoRetas() e armazenando os valores dos indices em variáveis.
const [retaA, retaB, retaC] = obterTamanhoRetas();

// Chamando a funçÃo exibirResultadoFormacaoTriangulo()
exibirResultadoFormacaoTriangulo(retaA, retaB, retaC);
