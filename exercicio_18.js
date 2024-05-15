const prompt = require('prompt-sync')();

function validarNome(entrada) {
    return /^[a-zA-Z]+$/.test(entrada);
}

function validarSalario(entrada) {
    return /^\d+$/.test(entrada) && parseInt(entrada) > 0;
}

function registrarFuncionario() {
    console.clear();

    let nome = prompt("Digite o nome do funcionário: ");
    while (!validarNome(nome)) {
        console.clear();
        nome = prompt("Por favor, digite um nome válido (somente letras): ");
    }

    let cargo = prompt("Digite o cargo do funcionário: ");
    while (!validarNome(cargo)) {
        console.clear();
        cargo = prompt("Por favor, digite um cargo válido (somente letras): ");
    }

    let salario = prompt("Digite o salário do funcionário: ");
    while (!validarSalario(salario)) {
        console.clear();
        salario = prompt("Por favor, digite um salário válido (somente números inteiros positivos): ");
    }
    
    // Formatar o salário para o formato desejado (R$ x.xxx,xx)
    salario = parseInt(salario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    return {
        nome: nome,
        cargo: cargo,
        salario: salario
    };
}

function exibirRegistro(funcionario) {
    console.clear();
    console.log("Nome do funcionário: " + funcionario.nome);
    console.log("Cargo: " + funcionario.cargo);
    console.log("Salário: " + funcionario.salario);
}

// Chamando funções:

// Registrar um funcionário
let funcionario = registrarFuncionario();

// Exibir o conteúdo do registro
exibirRegistro(funcionario);
