const prompt = require('prompt-sync')();

// Função para ler o nome de uma pessoa
function lerNome() {
    let nome = prompt("Digite o nome da pessoa: ");
    // Verifica se o nome contém apenas letras
    while (!/^[a-zA-Z]+$/.test(nome)) {
        console.clear();
        console.log("Por favor, digite apenas letras. Tente novamente!");
        nome = prompt("Digite o nome da pessoa: ");
    }
    return nome;
}

// Função para ler a idade de uma pessoa
function lerIdade() {
    let idade = prompt("Digite a idade da pessoa: ");
    // Verifica se a idade contém apenas números
    while (isNaN(idade) || idade < 0) {
        console.clear();
        console.log("Por favor, digite uma idade válida contendo apenas números.");
        idade = prompt("Digite a idade da pessoa: ");
    }
    return parseInt(idade);
}

// Função principal para ler os dados das pessoas
function lerDadosPessoas() {
    let nomes = [];
    let idades = [];

    for (let i = 0; i < 9; i++) {
        console.clear();
        console.log(`Pessoa ${i + 1}:`);
        nomes.push(lerNome());
        idades.push(lerIdade());
    }

    return { nomes, idades };
}

// Função para mostrar as pessoas menores de idade
function mostrarMenoresDeIdade(nomes, idades) {
    console.clear();
    console.log("Pessoas menores de idade:\n");
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        }
    }
}

// Execução do programa
let dados = lerDadosPessoas();
mostrarMenoresDeIdade(dados.nomes, dados.idades);
