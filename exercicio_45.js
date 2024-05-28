function contarOcorrencias(arrayDeStrings) {
    const objetoContador = {};
    
    for (const string of arrayDeStrings) {
      if (objetoContador[string]) {
        objetoContador[string] += 1;
      } else {
        objetoContador[string] = 1;
      }
    }
    
    return objetoContador;
  }
  
  // Exemplo de uso:

  const arrayDeFrutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];
  const resultado = contarOcorrencias(arrayDeFrutas);
  console.log(resultado); // Saída esperada: { maçã: 3, banana: 2, laranja: 1 }
  