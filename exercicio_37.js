function gerarGabaritoAleatorio() {
    const respostasPossiveis = ['A', 'B', 'C', 'D', 'E'];
    return Array.from({ length: 20 }, () => respostasPossiveis[Math.floor(Math.random() * respostasPossiveis.length)]);
  }
  
  function gerarRespostasAleatorias() {
    const respostasPossiveis = ['A', 'B', 'C', 'D', 'E'];
    return Array.from({ length: 20 }, () => respostasPossiveis[Math.floor(Math.random() * respostasPossiveis.length)]);
  }
  
  function verificarResultados(gabarito, alunos) {
    console.log("Gabarito da prova: " + gabarito.join(", "));
    console.log("--------------------------------------------------------------------------------------------------------------");
  
    alunos.forEach((aluno, index) => {
      const { respostas } = aluno;
      const acertos = respostas.filter((resposta, idx) => resposta === gabarito[idx]).length;
      const status = acertos >= 12 ? "APROVADO" : "REPROVADO";
  
      console.log(`Aluno ${index + 1} | Respostas: ${respostas.join(", ")} | Acertos: ${acertos} - ${status}`);
    });
  }
  
  // Gabarito da prova gerado aleatoriamente
  const gabarito = gerarGabaritoAleatorio();
  
  // Gerar 50 alunos com respostas aleatórias
  const alunos = Array.from({ length: 50 }, () => ({ respostas: gerarRespostasAleatorias() }));
  
  // Chamar a função para verificar os resultados
  verificarResultados(gabarito, alunos);
  