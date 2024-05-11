const prompt = require('prompt-sync')(); // Biblioteca que recebe o input do usuário no Node.js

function obterDistancia(mensagem) {
    while(true) {
        const userInput = prompt(mensagem);
        
        // Verifica se a string contém apenas dígitos numéricos inteiros
        if(/^\d+$/.test(userInput)) {
            const input = parseInt(userInput); // Converte a string para int
            console.clear();
            return input;
        }

        console.clear();
        console.log("Por favor, digite apenas números inteiros positivos. Tente novamente!");
    }
}

function calcularValor(distancia) {
    let precoPassagem;

    if (distancia <= 200) {
        precoPassagem = 0.50 * distancia;
    } else {
        precoPassagem = 0.45 * distancia;
    }

    return precoPassagem;
}

function exibirResultado(precoPassagem, distancia) {
    console.log(`Distância escolhida: ${distancia}km\n`);
    console.log(`O valor de sua corrida é R$${precoPassagem.toFixed(2)}`);
}
 
// Chamando função obterDistancia()
const distancia = obterDistancia("Corrida igual ou menor que 200km o valor fica R$0,50 por km percorrido mas em corridas maiores que 200km o valor fica R$0,45 por km percorrido. Digite a distância em km que pretende percorrer (digite apenas números): ");

// Chamando função calcularValor()
const precoPassagem = calcularValor(distancia);

// Chamando função exibirResultado()
exibirResultado(precoPassagem, distancia);