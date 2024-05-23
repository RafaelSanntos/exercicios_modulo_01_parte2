// Função que conta quantas propriedades do tipo string existem em um objeto
function contarStrings(obj) {
    let contador = 0;
    for (let chave in obj) {
      if (typeof obj[chave] === 'string') {
        contador++;
      }
    }
    return contador;
}

const exemploObj = {
    nome: "Ana",
    idade: 28,
    cidade: "Salvador",
    profissao: "Arquiteta",
    casado: false
};

function exibirResultado(quantidadeString) {
    console.log(`A quantidade de strings no objeto é ${quantidadeString}.`);
}
  
// Chamando a função e exibindo o resultado
const numeroDeStrings = contarStrings(exemploObj);
exibirResultado(numeroDeStrings)

  