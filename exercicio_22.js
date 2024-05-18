const prompt = require('prompt-sync')();

class Habitante {
    constructor(salario, numeroDeFilhos) {
        this.salario = salario;
        this.numeroDeFilhos = numeroDeFilhos;
    }
}

function obterSalario() {
    let salario;
    while (true) {
        salario = prompt("Digite o salário (apenas números maior ou igual a zero): ");
        salario = salario.trim();
        if (!isNaN(salario) && salario !== "" && parseFloat(salario) >= 0) {
            console.clear();
            return parseFloat(salario);
        } else {
            console.clear();
            console.log("Salário inválido, por favor utilize apenas números maior ou igual a zero. Tente novamente.");
        }
    }
}

function formatarSalario(salario) {
    return salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function obterNumeroDeFilhos() {
    let numeroDeFilhos;
    while (true) {
        numeroDeFilhos = prompt("Digite o número de filhos (apenas números maior ou igual a zero): ");
        numeroDeFilhos = numeroDeFilhos.trim();
        if (!isNaN(numeroDeFilhos) && numeroDeFilhos !== "" && parseInt(numeroDeFilhos) >= 0) {
            console.clear();
            return parseInt(numeroDeFilhos);
        } else {
            console.clear();
            console.log("Número de filhos inválido, por favor utilize apenas números maior ou igual a zero. Tente novamente.");
        }
    }
}

function coletarDadosHabitantes() {
    const habitantes = [];
    let continuar = true;

    while (continuar) {
        let salario = obterSalario();
        let numeroDeFilhos = obterNumeroDeFilhos();

        habitantes.push(new Habitante(salario, numeroDeFilhos));

        let resposta;
        do {
            resposta = prompt("Deseja inserir dados de outro habitante? (sim/nao): ").toLowerCase();
            if (resposta !== 'sim' && resposta !== 'nao') {
                console.clear();
                console.log("Resposta inválida. Por favor, digite 'sim' ou 'nao'.");
            }
        } while (resposta !== 'sim' && resposta !== 'nao');

        if (resposta === 'nao') {
            continuar = false;
            console.clear();
        }
    }

    return habitantes;
}

function exibirResultados(habitantes, mediaSalario, mediaNumeroDeFilhos, maiorSalario, percentualSalarioBaixo) {
    console.log("Habitantes registrados:");
    habitantes.forEach((habitante, index) => {
        console.log(`Habitante ${index + 1}: Salário ${formatarSalario(habitante.salario)}, Número de filhos ${habitante.numeroDeFilhos}`);
    });
    console.log();

    console.log("Média de salário:", formatarSalario(mediaSalario));
    console.log("Média de número de filhos:", Math.round(mediaNumeroDeFilhos)); // arredonda a média para o número inteiro mais próximo
    console.log("Maior salário:", formatarSalario(maiorSalario));
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioBaixo.toFixed(2)}%`);
}

function calcularMaiorSalario(habitantes) {
    if (habitantes.length === 0) return 0;

    let maiorSalario = habitantes.reduce((max, habitante) => habitante.salario > max ? habitante.salario : max, habitantes[0].salario);
    return maiorSalario;
}

function calcularPercentualSalarioBaixo(habitantes) {
    if (habitantes.length === 0) return 0;

    let totalPessoas = habitantes.length;
    let countSalarioBaixo = habitantes.filter(habitante => habitante.salario <= 350).length;
    return (countSalarioBaixo / totalPessoas) * 100;
}

function calcularMediaSalario(habitantes) {
    if (habitantes.length === 0) return 0;

    let totalSalarios = habitantes.reduce((total, habitante) => total + habitante.salario, 0);
    return totalSalarios / habitantes.length;
}

function calcularMediaNumeroDeFilhos(habitantes) {
    if (habitantes.length === 0) return 0;

    let totalFilhos = habitantes.reduce((total, habitante) => total + habitante.numeroDeFilhos, 0);
    return totalFilhos / habitantes.length;
}

// Chamando as funções
let habitantes = coletarDadosHabitantes();
let mediaSalario = calcularMediaSalario(habitantes);
let mediaNumeroDeFilhos = calcularMediaNumeroDeFilhos(habitantes);
let maiorSalario = calcularMaiorSalario(habitantes);
let percentualSalarioBaixo = calcularPercentualSalarioBaixo(habitantes);

exibirResultados(habitantes, mediaSalario, mediaNumeroDeFilhos, maiorSalario, percentualSalarioBaixo);
