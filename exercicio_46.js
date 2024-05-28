function totalVendasPorVendedor(vendas) {
    const resultado = {};
  
    for (const venda of vendas) {
      const vendedor = venda.vendedor;
      const valor = venda.valor;
  
      if (resultado[vendedor]) {
        resultado[vendedor] += valor;
      } else {
        resultado[vendedor] = valor;
      }
    }
  
    return resultado;
  }
  
  // Exemplo de uso:
  const vendas = [
    { vendedor: 'João', valor: 100 },
    { vendedor: 'Maria', valor: 200 },
    { vendedor: 'João', valor: 150 },
    { vendedor: 'Pedro', valor: 250 },
    { vendedor: 'Maria', valor: 300 }
  ];
  
  const resultado = totalVendasPorVendedor(vendas);
  console.log(resultado);
  // Saída esperada: { João: 250, Maria: 500, Pedro: 250 }
  