const prompt = require('prompt-sync')();
const hotel = require('./hotel');
const { fazerCheckIn, fazerCheckOut } = require('./checkin_checkout');
const { avaliarHotel } = require('./avaliacao_hoteis');
const { fazerReserva, cancelarReserva, listarReservas, reservas } = require('./reserva');
const { validarAvaliacao } = require('./validacoes');

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
                
                case "2":
                    console.clear();
                    const cidade = prompt("Digite o nome da cidade: ");
                    const hoteisNaCidade = hotel.buscarHoteisPorCidade(cidade);
                    menu.subMenuBuscarHoteisPorCidade(hoteisNaCidade);
                    break;

                case "3":
                    console.clear();
                    const idHotelReserva = Number(prompt("Digite o ID do hotel: "));
                    const numeroQuarto = Number(prompt("Digite o número do quarto: "));
                    const reservaFeita = fazerReserva(idHotelReserva, numeroQuarto);
                    menu.subMenuFazerReserva(reservaFeita);
                    break;

                case "4":
                    console.clear();
                    const idReservaCancelar = Number(prompt("Digite o ID da reserva que deseja cancelar: "));
                    const reservaCancelada = cancelarReserva(idReservaCancelar);
                    menu.subMenuCancelarReserva(reservaCancelada);
                    break;

                case "5":
                    console.clear();
                    const reservasListadas = listarReservas();
                    menu.subMenuListarReservas(reservasListadas);
                    break;

                case "6":
                    console.clear();
                    const idReservaCheckIn = Number(prompt("Digite o ID da reserva para fazer check-in: "));
                    const checkInFeito = fazerCheckIn(idReservaCheckIn);
                    menu.subMenuFazerCheckIn(checkInFeito);
                    break;

                case "7":
                    console.clear();
                    const idReservaCheckOut = Number(prompt("Digite o ID da reserva para fazer check-out: "));
                    const checkOutFeito = fazerCheckOut(idReservaCheckOut);
                    menu.subMenuFazerCheckout(checkOutFeito);
                    break;

                case "8":
                    console.clear();
                    const idHotelAvaliar = Number(prompt("Digite o ID do hotel que deseja avaliar: "));
                    avaliarHotel(idHotelAvaliar);
                    this.subMenuAvaliarHotel(); // Chame o submenu aqui
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
                    hotel.adicionarHotelProcesso(this.submenuAdicionarHotel.bind(this)); //bind(this) retorna uma nova função onde o valor de this é definido como o objeto menu
                    break;
                case "2":
                    console.clear();
                    this.exibirMenu(); //this faz referencia ao objeto menu onde está função está inserida
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
    },

    subMenuBuscarHoteisPorCidade: function() {
        let continuar = true;

        while (continuar) {
            console.log("\n1. Buscar novo hotel");
            console.log("2. Voltar ao Menu Principal");
            console.log("3. Sair");
            console.log("\n");
    
            const input = prompt("Escolha uma opção: ");
    
            switch (input) {
                case "1":
                    console.clear();
                    const cidade = prompt("Digite o nome da cidade: ");
                    const hoteisNaCidade = hotel.buscarHoteisPorCidade(cidade);
                    this.subMenuBuscarHoteisPorCidade(hoteisNaCidade);
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
    },

    subMenuFazerReserva: function() {
        let continuar = true;

        while (continuar) {
            console.log("\n1. Fazer outra reserva");
            console.log("2. Voltar ao Menu Principal");
            console.log("3. Sair");
            console.log("\n");
    
            const input = prompt("Escolha uma opção: ");
    
            switch (input) {
                case "1":
                    console.clear();
                    const idHotelReserva = Number(prompt("Digite o ID do hotel: "));
                    const numeroQuarto = Number(prompt("Digite o número do quarto: "));
                    const reservaFeita = fazerReserva(idHotelReserva, numeroQuarto);
                    this.subMenuFazerReserva(reservaFeita);
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
    },

    subMenuCancelarReserva: function() {
        let continuar = true;

        while (continuar) {
            console.log("\n1. Cancelar outra reserva");
            console.log("2. Voltar ao Menu Principal");
            console.log("3. Sair");
            console.log("\n");
    
            const input = prompt("Escolha uma opção: ");
    
            switch (input) {
                case "1":
                    console.clear();
                    const idReservaCancelar = Number(prompt("Digite o ID da reserva que deseja cancelar: "));
                    const reservaCancelada = cancelarReserva(idReservaCancelar);
                    this.subMenuCancelarReserva(reservaCancelada);
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
    },

    subMenuListarReservas: function() {
        let continuar = true;

        while (continuar) {
            console.log("\n1. Voltar ao Menu Principal");
            console.log("2. Sair");
            console.log("\n");
    
            const input = prompt("Escolha uma opção: ");
    
            switch (input) {
                case "1":
                    console.clear();
                    this.exibirMenu();
                    break;
                case "2":
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

    subMenuFazerCheckIn: function() {
        let continuar = true;

        while (continuar) {
            console.log("\n1. Fazer outro CheckIn");
            console.log("2. Voltar ao Menu Principal");
            console.log("3. Sair");
            console.log("\n");
    
            const input = prompt("Escolha uma opção: ");
    
            switch (input) {
                case "1":
                    console.clear();
                    const idReservaCheckIn = Number(prompt("Digite o ID da reserva para fazer check-in: "));
                    const checkInFeito = fazerCheckIn(idReservaCheckIn);
                    this.subMenuFazerCheckIn(checkInFeito);
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
    },

    subMenuFazerCheckout: function() {
        let continuar = true;

        while (continuar) {
            console.log("\n1. Fazer outro Checkout");
            console.log("2. Voltar ao Menu Principal");
            console.log("3. Sair");
            console.log("\n");
    
            const input = prompt("Escolha uma opção: ");
    
            switch (input) {
                case "1":
                    console.clear();
                    const idReservaCheckOut = Number(prompt("Digite o ID da reserva para fazer check-out: "));
                    const checkOutFeito = fazerCheckOut(idReservaCheckOut);
                    this.subMenuFazerCheckout(checkOutFeito);
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
    },

    subMenuAvaliarHotel: function() {
        let continuar = true;
    
        while (continuar) {
            console.log("\n1. Fazer outra avaliação");
            console.log("2. Voltar ao Menu Principal");
            console.log("3. Sair");
            console.log("\n");
        
            const input = prompt("Escolha uma opção: ");
        
            switch (input) {
                case "1":
                    console.clear();
                    const idHotelAvaliar = Number(prompt("Digite o ID do hotel que deseja avaliar: "));
                    const avaliacao = validarAvaliacao("Digite sua avaliação: ");
                    const avaliacaoFeita = avaliarHotel(idHotelAvaliar, avaliacao);
                    this.subMenuAvaliarHotel(avaliacaoFeita);
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
    },
}

module.exports = menu; //Em js cada arquivo é um modulo -exportando o objeto menu para que possa ser usado em outros arquivos js
