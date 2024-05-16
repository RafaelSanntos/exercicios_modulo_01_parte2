const prompt = require('prompt-sync')();

function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;
    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        console.clear();
        console.log("Sexo inválido! Por favor, digite 'masculino' ou 'feminino'.");
        return;
    }
    return pesoIdeal;
}

function main() {
    console.log("Calculadora de peso ideal\n");

    let sexo;
    do {
        sexo = prompt("Digite o sexo (masculino ou feminino): ");
        if (!['masculino', 'feminino'].includes(sexo.toLowerCase())) {
            console.clear();
            console.log("Sexo inválido! Por favor, digite 'masculino' ou 'feminino'.");
        }
    } while (!['masculino', 'feminino'].includes(sexo.toLowerCase()));
    console.clear();

    let altura;
    do {
        let alturaInput = prompt("Digite a altura (em metros, no formato x,xx): ");
        if (/^\d,\d{2}$/.test(alturaInput)) {
            altura = parseFloat(alturaInput.replace(',', '.'));
            console.clear();
        } else {
            console.clear();
            console.log("Altura inválida! Por favor, digite no formato x,xx.");
        }
    } while (isNaN(altura));
    console.clear();

    const pesoIdeal = calcularPesoIdeal(altura, sexo);
    if (pesoIdeal !== undefined) {
        console.log(`O peso ideal para uma pessoa de altura ${altura.toFixed(2)}m e sexo ${sexo} é ${pesoIdeal.toFixed(2)}kg.`);
    }
}

// Chamando a função principal
main();
