// Função para preencher o vetor com números aleatórios entre 0 e 99
function preencherVetor(vetor, tamanho) {
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.floor(Math.random() * 100); // Números aleatórios entre 0 e 99
    }
}

// Função para mostrar os números gerados
function mostrarNumeros(vetor) {
    console.log("Números gerados:");
    console.log(vetor.join(", "));
}

// Função para ordenar o vetor em ordem crescente
function ordenarVetor(vetor) {
    vetor.sort(function(a, b) {
        return a - b;
    });
}

// Função para mostrar os números ordenados
function mostrarNumerosOrdenados(vetor) {
    console.log("\nNúmeros ordenados:");
    console.log(vetor.join(", "));
}

// Criando um vetor com 20 posições
let vetor = new Array(20);

// Chamando as funçãoes:

// Preenchendo o vetor com números aleatórios
preencherVetor(vetor, 20);

// Mostrando os números gerados
mostrarNumeros(vetor);

// Ordenando o vetor
ordenarVetor(vetor);

// Mostrando os números ordenados
mostrarNumerosOrdenados(vetor);
