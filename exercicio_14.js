const prompt = require('prompt-sync')();

function obterNomes() {
    const nomesArray = [];
    for (let i = 0; i < 7; i++) {
        const nome = prompt(`Digite o ${i + 1}º nome: `);
        nomesArray.push(nome);
    }
    return nomesArray;
}

const nomes = obterNomes();
console.log("\nNomes informados (na ordem inversa):\n");

// nomes.length - 1 -> acessa o ultimo indice do array (6), colocando ele e seu valor na primeira posição do array
// i >= 0 -> mantém o loop rodando enquanto i for maior ou igual a 0
// i- -> diminui o indice i a cada rodada do loop até ele ser menor que zero
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}
