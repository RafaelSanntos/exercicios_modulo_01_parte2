const prompt = require('prompt-sync')(); // Biblioteca que recebe o input do usuário no Node.js

function exibirMenu() {
    console.log("Bem-vindo ao Jogo Pedra, Papel e Tesoura! Você escolhe um opção e logo em seguida o computador também escolhe uma opção aleatória.\n");
    console.log("Escolha uma opção entre 1, 2 ou 3:");
    console.log("1. Pedra");
    console.log("2. Papel");
    console.log("3. Tesoura\n");
}

function obterEscolhaDoJogador() {
    while (true) {
        exibirMenu();
        const escolha = prompt("Digite o número correspondente à sua escolha: ");
        switch (escolha) {
            case '1':
                return 'pedra';
            case '2':
                return 'papel';
            case '3':
                return 'tesoura';
            default:
                console.clear();
                console.log("Escolha inválida. Por favor, escolha uma opção válida.");
        }
    }
}

// Math.random - gera um valor aleátorio entre 0 e 1
// Math.floor - arredonda o valor gerado por math.random()
function gerarEscolhaDoComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const escolhaAleatoria = Math.floor(Math.random() * 3);

    return opcoes[escolhaAleatoria];
}

function determinarVencedor(escolhaJogador, escolhaComputador) {
    if (escolhaJogador === escolhaComputador) {
        return "Empate";
    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        return "Você venceu!";
    } else {
        return "O computador venceu!";
    }
}

function exibirResultado(resultado) {
    console.clear();
    console.log("Obrigado por jogar!");
    console.log("Resultado: ", resultado);
}

// Chamando as funções
const escolhaDoJogador = obterEscolhaDoJogador();
const escolhaDoComputador = gerarEscolhaDoComputador();
const resultado = determinarVencedor(escolhaDoJogador, escolhaDoComputador);
exibirResultado(resultado);
