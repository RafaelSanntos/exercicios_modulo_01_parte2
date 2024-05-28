// Exemplo de uso:
const inventarioLojaA = {
    maçã: 10,
    banana: 5,
    laranja: 8
};
  
const inventarioLojaB = {
    banana: 7,
    laranja: 3,
    abacaxi: 4
};
  
function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = { ...inventarioLojaA }; // Copia o inventário da loja A
  
    for (const item in inventarioLojaB) {
      if (inventarioLojaB.hasOwnProperty(item)) {
        if (inventarioCombinado.hasOwnProperty(item)) {
          inventarioCombinado[item] += inventarioLojaB[item]; // Soma as quantidades se o item existir em ambas as lojas
        } else {
          inventarioCombinado[item] = inventarioLojaB[item]; // Adiciona o item se ele não existir no inventário combinado
        }
      }
    }
  
    return inventarioCombinado;
}

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioCombinado);
// Saída esperada: { maçã: 10, banana: 12, laranja: 11, abacaxi: 4 }
  