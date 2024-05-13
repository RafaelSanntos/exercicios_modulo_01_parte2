const prompt = require('prompt-sync')();

// Função para obter os dados do funcionário com validações
function obterDadosFuncionario() {
    let funcionarios = [];
    let continuarInserindo = true;

    while (continuarInserindo) {
        let salario;
        let salarioValido = false;
        let sexo;

        // Loop para garantir que o salário seja um número inteiro maior que zero
        while (!salarioValido) {
            let salarioInput = prompt("Informe o salário do funcionário (use somente números): ");
            salario = parseFloat(salarioInput);

            // Verifica se o salário é um número e se é maior que zero
            if (!isNaN(salario) && salario > 0 && Number.isInteger(salario)) {
                salarioValido = true;
            } else {
                console.clear();
                console.log("Por favor, insira um salário válido (número inteiro maior que zero, use somente números).");
            }
        }

        // Loop para garantir que o sexo seja válido (M ou F)
        while (true) {
            console.clear();
            sexo = prompt("Informe o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();
            
            // Verifica se o sexo é válido
            if (sexo === 'M' || sexo === 'F') {
                break;
            } else {
                console.log("Por favor, insira um sexo válido (M para masculino, F para feminino).");
            }
        }

        funcionarios.push({ salario, sexo });
        console.clear();
        // Perguntar se o usuário deseja inserir mais um funcionário
        let resposta = prompt("Deseja inserir mais um funcionário? (S para sim, N para não): ").toUpperCase();
        if (resposta !== 'S') {
            console.clear();
            continuarInserindo = false;
        }
    }

    return funcionarios;
}

// Função para exibir total de salários pagos aos homens e mulheres
function exibirTotalSalariosPorSexo(funcionarios) {
    let totalSalarioHomens = 0;
    let totalSalarioMulheres = 0;

    for (let funcionario of funcionarios) {
        if (funcionario.sexo === 'M') {
            totalSalarioHomens += funcionario.salario;
        } else if (funcionario.sexo === 'F') {
            totalSalarioMulheres += funcionario.salario;
        }
    }

    console.log("Total de salário pago aos homens: " + totalSalarioHomens.toFixed(2));
    console.log("Total de salário pago às mulheres: " + totalSalarioMulheres.toFixed(2));
}

// Chamando função obterDadosFuncionario()
const funcionarios = obterDadosFuncionario();

// Chamando a função exibirTotalSalariosPorSexo()
exibirTotalSalariosPorSexo(funcionarios);
