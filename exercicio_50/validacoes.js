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
    }
}