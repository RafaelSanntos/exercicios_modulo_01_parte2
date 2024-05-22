const prompt = require('prompt-sync')();

function lerVetor() {
  let input = prompt('Digite 6 números separados por espaço: ');
  let vetor = input.trim().split(' ').map(Number);

  // Validar se o vetor possui exatamente 6 elementos
  if (vetor.length !== 6 || vetor.some(isNaN)) {
    console.clear();
    console.log('Entrada inválida. Digite exatamente 6 números válidos.');
    return lerVetor();
  }

  return vetor;
}

function lerIdentificador(vetor) {
  console.clear();
  let input = prompt('Digite o identificador (1-soma, 2-produto, 3-média, 4-ordenar, 5-mostrar): ');
  const identificador = parseInt(input);

  if (isNaN(identificador) || identificador < 1 || identificador > 5) {
    console.log('Identificador inválido. Digite um número entre 1 e 5.');
    return lerIdentificador(vetor);
  }

  executarOperacao(vetor, identificador);
}

function executarOperacao(vetor, identificador) {
  switch (identificador) {
    case 1:
      const soma = vetor.reduce((acc, val) => acc + val, 0);
      console.log(`Soma dos elementos: ${soma}`);
      break;
    case 2:
      const produto = vetor.reduce((acc, val) => acc * val, 1);
      console.log(`Produto dos elementos: ${produto}`);
      break;
    case 3:
      const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
      console.log(`Média dos elementos: ${media}`);
      break;
    case 4:
      const ordenado = [...vetor].sort((a, b) => a - b);
      console.log(`Elementos ordenados: ${ordenado.join(', ')}`);
      break;
    case 5:
      console.log(`Vetor: ${vetor.join(', ')}`);
      break;
    default:
      console.log('Identificador inválido.');
  }
}

function main() {
  const vetor = lerVetor();
  lerIdentificador(vetor);
}

// Chamando função principal
main();
