// Definindo o objeto 'dados' com várias propriedades
const dados = {
    nome: "Rafael",
    idade: 21,
    hobbies: ["programar", "leitura", "jogar"],
    endereco: {
      rua: "Rua do Programador",
      numero: 404,
      cidade: "São Paulo"
    },
    notas: [7, 8.5, 9],
    ativo: true,
    historicoEmprego: ["QA", "Programador", "Jogador"]
};
  

function filtrarArrays(obj) {
    const resultado = {};
    for (let chave in obj) {
      if (Array.isArray(obj[chave])) {
        resultado[chave] = obj[chave];
      }
    }
    return resultado;
}

const arraysSomente = filtrarArrays(dados);
console.log(arraysSomente);
