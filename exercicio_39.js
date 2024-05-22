function gerarVetorAleatorio(tamanho) {
    const vetor = [];
    for (let i = 0; i < tamanho; i++) {
      vetor.push(Math.floor(Math.random() * 201) - 100); // Números aleatórios entre -100 e 100
    }
    return vetor;
}
  
function compactarVetor(vetor) {
    return vetor.filter(numero => numero > 0); // Filtra apenas valores positivos
}

function exibirResultado(vetorA, vetorB) {
    console.log("Vetor A (original):");
    console.log(vetorA);

    console.log("\nVetor B (sem elementos negativos e zeros):");
    console.log(vetorB);
}

// Chamando funções:
  
// Gerar vetor A com 100 posições
const vetorA = gerarVetorAleatorio(100);

// Compactar vetor A para vetor B (removendo negativos e zeros)
const vetorB = compactarVetor(vetorA);
  
exibirResultado(vetorA, vetorB)
 
  