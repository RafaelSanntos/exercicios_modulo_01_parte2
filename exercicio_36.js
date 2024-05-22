function gerarGabaritoAleatorio() {
    return Array.from({ length: 13 }, () => Math.floor(Math.random() * 2)); // 0 ou 1 aleatoriamente
}

function gerarRespostasAleatorias() {
    return Array.from({ length: 13 }, () => Math.floor(Math.random() * 2)); // 0 ou 1 aleatoriamente
}

function verificarGanhadores(gabarito, apostadores) {
    console.log("Gabarito da loteria: " + gabarito.join(", "));

    apostadores.forEach(apostador => {
        let { numeroCartao, respostas } = apostador;
        let acertos = respostas.filter((resposta, index) => resposta === gabarito[index]).length;

        console.log(`Apostador ${numeroCartao.toString().padStart(3, '0')} | Respostas: ${respostas.join(", ")} | Acertos: ${acertos}`);
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    });
}

const gabarito = gerarGabaritoAleatorio();

// Gerar 100 apostadores com respostas aleatórias
let apostadores = [];
for (let i = 1; i <= 100; i++) {
    apostadores.push({ numeroCartao: i, respostas: gerarRespostasAleatorias() });
}

// Chamar a função para verificar os ganhadores
verificarGanhadores(gabarito, apostadores);
