const prompt = require('prompt-sync')();

// Função para calcular os elementos da PA
function calcularPA(primeiroTermo, razao) {
    let pa = [];
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        let elemento = primeiroTermo + razao * i;
        pa.push(elemento);
        soma += elemento;
    }

    return { elementos: pa, soma: soma };
}

// Função para exibir os elementos da PA e a soma
function exibirResultado(pa) {
    console.clear();
    console.log("Os 10 primeiros elementos da PA são:");
    console.log(pa.elementos.join(", "));
    console.log("\nA soma dos elementos é:", pa.soma);
}

// Função principal
function main() {
    const primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
    const razao = parseInt(prompt("Digite a razão da PA: "));

    const resultado = calcularPA(primeiroTermo, razao);
    exibirResultado(resultado);
}

// Chamada da função principal
main();
