const prompt = require('prompt-sync')();

// Definição da estrutura de dados para representar um funcionário
class Funcionario {
    constructor(matricula, nome, salarioBruto) {
        this.matricula = matricula;
        this.nome = nome;
        this.salarioBruto = salarioBruto;
    }
}

function calcularDescontoINSS(salarioBruto) {
    const taxaINSS = 0.12; // Taxa de desconto do INSS (12%)
    return salarioBruto * taxaINSS;
}

function calcularSalarioLiquido(salarioBruto, descontoINSS) {
    return salarioBruto - descontoINSS;
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função principal para ler os dados dos funcionários e emitir os contracheques
function main() {
    const numeroFuncionarios = 2; // Número de funcionários para testar
    const funcionarios = [];

    console.log("Digite os dados de cada funcionário:\n");

    for (let i = 0; i < numeroFuncionarios; i++) {
        console.log(`Funcionário ${i + 1}:`);

        let matricula;
        do {
            matricula = prompt("Matrícula: ");
            if (!/^\d+$/.test(matricula)) {
                console.clear();
                console.log("Valor inválido! Por favor, digite apenas números.");
            }
        } while (!/^\d+$/.test(matricula));
        console.clear();

        let nome;
        do {
            nome = prompt("Nome: ");
            if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome.trim())) {
                console.clear();
                console.log("Nome inválido! Por favor, digite apenas letras.");
            }
        } while (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome.trim()));
        console.clear();
        

        let salarioBruto;
        do {
            salarioBruto = parseFloat(prompt("Salário bruto: ").replace(",", "."));
            if (isNaN(salarioBruto) || salarioBruto <= 0) {
                console.clear();
                console.log("Valor inválido! Por favor, digite um número maior que zero.");
            }
        } while (isNaN(salarioBruto) || salarioBruto <= 0);
        console.clear();

        // Criar um novo funcionário com os dados inseridos
        const funcionario = new Funcionario(matricula, nome, salarioBruto);
        funcionarios.push(funcionario);
        console.clear();
    }

    console.log("------------------------");

    // Emitir contracheque de cada funcionário
    funcionarios.forEach(funcionario => {
        const descontoINSS = calcularDescontoINSS(funcionario.salarioBruto);
        const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, descontoINSS);

        console.log("Contracheque:\n");
        console.log("Matrícula:", funcionario.matricula);
        console.log("Nome:", funcionario.nome);
        console.log("Salário bruto:", formatarMoeda(funcionario.salarioBruto));
        console.log("Dedução INSS:", formatarMoeda(descontoINSS));
        console.log("Salário líquido:", formatarMoeda(salarioLiquido));
        console.log("------------------------");
    });
}

// Chamando a função principal
main();
