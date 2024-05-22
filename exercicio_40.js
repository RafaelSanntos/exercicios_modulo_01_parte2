function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarResultadoOficial() {
  let resultado = [];
  for (let i = 0; i < 5; i++) {
    resultado.push(gerarNumeroAleatorio(1, 60));
  }
  return resultado;
}

function gerarAposta() {
  let aposta = [];
  for (let i = 0; i < 5; i++) {
    aposta.push(gerarNumeroAleatorio(1, 60));
  }
  return aposta;
}

function verificarGanhador(resultadoOficial, aposta) {
  for (let i = 0; i < 5; i++) {
    if (aposta[i] !== resultadoOficial[i]) {
      return false; 
    }
  }
  return true;
}

function main() {
  console.log("Resultado oficial da Loto (aleatório):");
  const resultadoOficial = gerarResultadoOficial();
  console.log(resultadoOficial);

  let ganhadorEncontrado = false;

  for (let i = 1; i <= 50; i++) {
    const aposta = gerarAposta();

    if (verificarGanhador(resultadoOficial, aposta)) {
      console.log(`\nAposta ${i} é a GANHADORA! Números da aposta: ${aposta}`);
      ganhadorEncontrado = true;
      break;
    } else {
      console.log(`Aposta ${i}: ${aposta}`);
    }
  }

  if (!ganhadorEncontrado) {
    console.log("\nNenhuma aposta é ganhadora.");
  }
}

// Chamando a função principal
main();
