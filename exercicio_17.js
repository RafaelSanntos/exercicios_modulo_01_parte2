const prompt = require('prompt-sync')();

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

function mostrarMenoresDeIdade(nomes, idades) {
    console.clear();
    console.log("Pessoas menores de idade:\n");
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        }
    }
}

// Chamando função
let dados = lerDadosPessoas();
mostrarMenoresDeIdade(dados.nomes, dados.idades);
