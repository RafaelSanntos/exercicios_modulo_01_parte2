// Exemplo de uso:
const objetoOriginal = {
    a: 1,
    b: 2,
    c: 3
};

function transformarObjeto(objeto, funcao) {
    const novoObjeto = {};
    
    for (const chave in objeto) {
      if (objeto.hasOwnProperty(chave)) {
        novoObjeto[chave] = {
          original: objeto[chave],
          transformado: funcao(objeto[chave])
        };
      }
    }
    
    return novoObjeto;
}
  
const funcaoDobrar = (valor) => valor * 2;

const objetoTransformado = transformarObjeto(objetoOriginal, funcaoDobrar);
console.log(objetoTransformado);
// Saída esperada: { a: { original: 1, transformado: 2 }, b: { original: 2, transformado: 4 }, c: { original: 3, transformado: 6 } }
  