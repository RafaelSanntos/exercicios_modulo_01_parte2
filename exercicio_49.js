// Exemplo de uso:
const transacoes = [
    { id: 1, valor: 100, data: '2023-01-01', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2023-01-02', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2023-01-03', categoria: 'Alimentação' },
    { id: 4, valor: 80, data: '2023-01-04', categoria: 'Lazer' },
    { id: 5, valor: 150, data: '2023-01-05', categoria: 'Transporte' }
];

function agruparTransacoesPorCategoria(transacoes) {
    const resultado = {};
  
    for (const transacao of transacoes) {
      const { categoria, valor } = transacao;
  
      if (resultado[categoria]) {
        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += valor;
      } else {
        resultado[categoria] = {
          transacoes: [transacao],
          subtotal: valor
        };
      }
    }
  
    return resultado;
}

const resultado = agruparTransacoesPorCategoria(transacoes);
console.log(resultado);
  