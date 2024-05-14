function sequenciaFibonacci(n) {
    let fibArray = [];
    
    if (n === 1) {
        fibArray.push(0);
    } else if (n >= 2) {
        fibArray.push(0, 1);
        
        // Adicionando os elementos no array a partir do número 2
        for (let i = 2; i < n; i++) {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
    }
    
    return fibArray;
}

// Chamando a função sequenciaFibonacci com parâmetro igual a 15
let vetorNumerico = sequenciaFibonacci(15);

console.log(vetorNumerico);
