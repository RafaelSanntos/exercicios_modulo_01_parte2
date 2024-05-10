const prompt = require('prompt-sync')(); // Biblioteca que recebe o input do usuário no Node.js

function obterVelocidadeCarro(mensagem) {
    while(true) {
        const userInput = prompt(mensagem);
        
        // Verifica se a string contém apenas dígitos numéricos inteiros
        if(/^\d+$/.test(userInput)) {
            const input = parseInt(userInput); // Converte a string para int
            console.clear();
            return input;
        }

        console.clear();
        console.log("Por favor, digite apenas números inteiros. Tente novamente!");
    }
}

function verificarLimiteVelocidade(velocidade) {
    if (velocidade > 80) {
        const multa = calcularMulta(velocidade);
        return "Você foi multado em R$" + multa.toFixed(2) + ".";
    } else {
        return "Você não foi multado.";
    }
}

function calcularMulta(velocidade) {
    const limiteUltrapassado = velocidade - 80;
    const valorMulta = limiteUltrapassado * 5;
    return valorMulta;
}

function exibirResultado(resultado, velocidade) {
    console.log("Sua velocidade:", velocidade + "km/h\n");
    console.log("Sendo o limite máximo permitido 80km/h e a multa de R$5,00 por km acima do limite em caso de velocidade acima do permitido.",resultado);
}

// Chamando a função obterVelocidadeCarro() e armazenando ela na variável velocidade
const velocidade = obterVelocidadeCarro("Digite a velocidade do seu carro em km/h (apenas número!): ");

// Chamando a função verificarLimiteVelocidade() e armazenando ela na variável resultado
const resultado = verificarLimiteVelocidade(velocidade);

// Chamando a função exibirResultado()
exibirResultado(resultado, velocidade);
