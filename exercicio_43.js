const obj1 = {
    nome: "Rafael",
    idade: 1000,
    cidade: "São Paulo"
};
  
const obj2 = {
    idade: 21,
    profissao: "Programador",
    pais: "Brasil"
};
  
function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function exibirObjCombinado(objCombinado) {
    console.log(objCombinado)
}

const objCombinado = combinarObjetos(obj1, obj2);
exibirObjCombinado(objCombinado);
