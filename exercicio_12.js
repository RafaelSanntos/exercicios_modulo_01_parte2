const prompt = require('prompt-sync')();

let numeroElementos;
let valido = false;

// Função para verificar se o input é um número inteiro positivo
function validarNumero(numero) {
    return Number.isInteger(numero) && numero > 0;
}

// Função para gerar os primeiros 'n' números da Sequência de Fibonacci
function fibonacci(n) {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Função para exibir os elementos da Sequência de Fibonacci
function mostrarFibonacci(n) {
    if (validarNumero(n)) {
        console.clear();
        const sequencia = fibonacci(n);
        console.log(`Os ${n} primeiros elementos da Sequência de Fibonacci são: ${sequencia.join(', ')}`);
        return true; // Retorna verdadeiro se o número for válido
    } else {
        console.clear();
        console.log('Por favor, insira um número inteiro positivo válido.');
        return false; // Retorna falso se o número não for válido
    }
}

// Pedir input do usuário até que um número válido seja inserido
while (!valido) {
    numeroElementos = parseInt(prompt('Digite o número de elementos da Sequência de Fibonacci que você deseja ver: '));
    valido = mostrarFibonacci(numeroElementos);
}
