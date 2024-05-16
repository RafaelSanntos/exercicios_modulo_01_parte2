const prompt = require('prompt-sync')();

function lerHorarios() {
    let horarios = [];

    for (let i = 0; i < 5; i++) {

        let horario = prompt(`Digite o ${i + 1}º horário no formato HH:MM:SS: `);
        
        if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(horario)) {
            horarios.push(horario);
            console.clear();
        } else {
            console.clear();
            console.log("Formato de hora inválido! Por favor, digite no formato HH:MM:SS.");
            i--; 
        }
    }

    return horarios;
}

function exibirHorarios(horarios) {
    console.log("Horários digitados:\n");

    horarios.forEach((horario, indice) => {
        console.log(`${indice + 1}º horário: ${horario}`);
    });
}

// Chamando funções
const horarios = lerHorarios();
exibirHorarios(horarios);
