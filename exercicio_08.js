// Esse algoritmo possui validação de entrada sendo somente números inteiros de 1 (hora mínima mental) e 720(horas máximas em um mês de 30 dias)

const prompt = require('prompt-sync')();

function calcularTotalPontos() {
    let horasAtividadeMensal = parseInt(prompt("Digite a quantidade de horas mensais (somente números): "));

    while(true) {
        if(!isNaN(horasAtividadeMensal) && horasAtividadeMensal >= 1 && horasAtividadeMensal <= 720) {
            let totalPontos;
            if (horasAtividadeMensal <= 10){
                totalPontos = horasAtividadeMensal * 2;
            } else if (horasAtividadeMensal > 10 && horasAtividadeMensal <= 20){
                totalPontos = horasAtividadeMensal * 5;
            } else {
                totalPontos = horasAtividadeMensal * 10;
            }
        
            return totalPontos;
        } else {
            console.clear();
            console.log("Entrada inválida, digite números inteiros de 1 até 720. Tente novamente!")
            horasAtividadeMensal = parseInt(prompt("Digite a quantidade de horas mensais (somente números): "));
        }
    }
}

function calcularValorPagamento(totalPontos) {
    const pagamentoTotal = (totalPontos * 0.05).toFixed(2);

    return pagamentoTotal;
}

function exibirResultado(totalPontos, pagamento) {
    console.clear();
    console.log(`Você acumulou ${totalPontos} pontos no mês!\n`)
    console.log(`E ganhou R$${pagamento} reais. Parabéns!`)
}

const totalPontos = calcularTotalPontos();
const pagamento = calcularValorPagamento(totalPontos);
exibirResultado(totalPontos, pagamento);
