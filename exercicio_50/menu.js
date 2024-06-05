const prompt = require('prompt-sync')();
const hotel = require('./hotel');

const menu = {

    exibirMenu: function() {
        let opcao = "";

        while (opcao !== "9") {
            console.log("\nOlá, bem vindo ao gerenciador de Hotéis.\n");
            console.log("1. Adicionar Hotel");
            console.log("2. Buscar Hotéis por Cidade");
            console.log("3. Fazer Reserva");
            console.log("4. Cancelar Reserva");
            console.log("5. Listar Reservas");
            console.log("6. Fazer Check-in");
            console.log("7. Fazer Check-out");
            console.log("8. Avaliar Hotel");
            console.log("9. Sair\n");
    
            opcao = prompt("Escolha uma opção: ");
    
            switch (opcao) {
                case "1":
                    console.clear();
                    hotel.adicionarHotelProcesso(menu.submenuAdicionarHotel.bind(menu));
                    break;
    
                case "9":
                    console.clear();
                    console.log("Saindo...");
                    console.log("Finalizado!");
                    process.exit(0);
                    break;
    
                default:
                    console.clear();
                    console.log("Opção inválida.");
                    break;
            }
        }
    },

    submenuAdicionarHotel: function() {
        let continuar = true;
        
        while (continuar) {
            console.log("\n1. Adicionar mais Hoteis");
            console.log("2. Voltar ao Menu Principal");
            console.log("3. Sair");
            console.log("\n");
    
            const input = prompt("Escolha uma opção: ");
    
            switch (input) {
                case "1":
                    console.clear();
                    hotel.adicionarHotelProcesso(this.submenuAdicionarHotel.bind(this));
                    break;
                case "2":
                    console.clear();
                    this.exibirMenu();
                    break;
                case "3":
                    console.clear();
                    console.log("Saindo...");
                    console.log("Finalizado!");
                    process.exit(0);
                    break;
                default:
                    console.clear();
                    console.log("Opção inválida.");
                    break;
            }
        }
    }
}

module.exports = menu;