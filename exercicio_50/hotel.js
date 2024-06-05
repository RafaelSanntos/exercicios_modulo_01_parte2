const { validarNumeroPositivo, validarTexto } = require('./validacoes');

const hoteis = [];
const reservas = [];
let ultimoIdHotel = 0; // Variável para armazenar o último ID de hotel usado

const hotel = {
    hoteis,
    reservas,
    
    coletarDadosHotel: function() {
        let idHotel = ultimoIdHotel + 1; // Incrementa o ID automaticamente
        let nomeHotel = validarTexto("Digite o nome do hotel (somente letras): ");
        let cidadeHotel = validarTexto("Digite o nome da cidade local do Hotel (somente letras): ");
        let quartosTotais = validarNumeroPositivo("Digite o número total de quartos que o hotel tem (somente números positivos): ");
        let quartosDisponiveis = validarNumeroPositivo("Digite o número de quartos disponíveis do hotel (somente números positivos): ");
    
        return {
            idHotel,
            nomeHotel,
            cidadeHotel,
            quartosTotais,
            quartosDisponiveis
        };
    },

    adicionarHotel: function(idHotel, nomeHotel, cidadeHotel, quartosTotais, quartosDisponiveis) {
        // Verifica se os quartos disponíveis não excedem o total
        if (quartosDisponiveis > quartosTotais) {
            console.log(`Erro: Você digitou que o total de quartos é ${quartosTotais}, o número de quartos disponíveis não pode exceder esse limite.`);
            return false;
        }
    
        const novoHotel = {
            id: idHotel,
            nome: nomeHotel,
            cidade: cidadeHotel,
            quartosTotais: quartosTotais,
            quartosDisponiveis: quartosDisponiveis
        };
        this.hoteis.push(novoHotel);
        console.log(`\nInformações do Hotel ${nomeHotel} adicionado com sucesso!`);
        ultimoIdHotel = idHotel; // Atualiza o último ID de hotel usado
        return true;
    },

    adicionarHotelProcesso: function(submenuAdicionarHotel) {
        console.log("Adicione as informações do Hotel:\n");
        let dadosHotel = hotel.coletarDadosHotel();
        let adicionadoComSucesso = hotel.adicionarHotel(dadosHotel.idHotel, dadosHotel.nomeHotel, dadosHotel.cidadeHotel, dadosHotel.quartosTotais, dadosHotel.quartosDisponiveis);
        while (!adicionadoComSucesso) {
            console.log("Por favor, corrija os dados do hotel.");
            dadosHotel.quartosDisponiveis = validarNumeroPositivo("Digite o número de quartos disponíveis do hotel (somente números positivos): ");
            adicionadoComSucesso = hotel.adicionarHotel(dadosHotel.idHotel, dadosHotel.nomeHotel, dadosHotel.cidadeHotel, dadosHotel.quartosTotais, dadosHotel.quartosDisponiveis);
        }
        submenuAdicionarHotel.call(this);
    }
}

module.exports = hotel;
