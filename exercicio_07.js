const prompt = require('prompt-sync')();

function calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
    let precoDiario;
    let precoPorKm;

    if (tipoCarro === "popular") {
        precoDiario = 90;
        if (kmPercorridos <= 100) {
            precoPorKm = 0.20;
        } else {
            precoPorKm = 0.10;
        }
    } else if (tipoCarro === "luxo") {
        precoDiario = 150;
        if (kmPercorridos <= 200) {
            precoPorKm = 0.30;
        } else {
            precoPorKm = 0.25;
        }
    } else {
        console.log("Tipo de carro inválido.");
        return;
    }

    const precoTotal = (precoDiario * diasAluguel) + (precoPorKm * kmPercorridos);
    console.log("Preço a ser pago: R$", precoTotal.toFixed(2));
}

// Entrada de dados pelo usuário
const tipoCarro = prompt("Digite o tipo de carro (popular ou luxo): ");
const diasAluguel = parseInt(prompt("Digite a quantidade de dias de aluguel: "));
const kmPercorridos = parseInt(prompt("Digite a quantidade de quilômetros percorridos: "));

// Chamando a função com os dados fornecidos pelo usuário
calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos);
