const hotel = require('./hotel');
const { validarAvaliacao } = require('./validacoes');

function avaliarHotel(idHotel) {
    const hotelEncontrado = hotel.hoteis.find(h => h.id === idHotel);
    if (!hotelEncontrado) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return false; // Retorne false se o hotel não for encontrado
    }
    const avaliacao = validarAvaliacao("Digite sua avaliação (0-10): ");
    if (!hotelEncontrado.avaliacoes) {
        hotelEncontrado.avaliacoes = [];
    }
    hotelEncontrado.avaliacoes.push(avaliacao);
    console.log(`Avaliação adicionada ao hotel ${hotelEncontrado.nome}.`);
    return true; // Retorne true se a avaliação for adicionada com sucesso
}

module.exports = {
    avaliarHotel
};
