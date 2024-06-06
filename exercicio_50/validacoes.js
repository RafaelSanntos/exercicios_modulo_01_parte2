const prompt = require('prompt-sync')();

module.exports = {

    validarNumeroPositivo: function(mensagem) {
        let numero = Number(prompt(mensagem));
        while (true) {
            if (numero >= 0 && Number.isInteger(numero)) {
                console.clear();
                return numero;
            } else {
                console.clear();
                console.log("Digite somente números inteiros positivos");
                numero = Number(prompt(mensagem));
            }
        }
    },

    validarTexto: function(mensagem) {
        let texto = prompt(mensagem);
        while (true) {
            if (/^[a-zA-Z\s]*$/.test(texto)) {
                console.clear();
                return texto;
            } else {
                console.clear();
                console.log("Digite somente letras");
                texto = prompt(mensagem);
            }
        }
    },

    validarAvaliacao: function(mensagem) {
        let avaliacao = Number(prompt(mensagem));
        while (avaliacao < 0 || avaliacao > 10 || isNaN(avaliacao)) {
            console.clear();
            console.log("Digite somente números de 0 a 10");
            avaliacao = Number(prompt(mensagem));
        }
        return avaliacao;
    }
}
