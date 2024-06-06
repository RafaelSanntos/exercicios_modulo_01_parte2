const hotel = require('./hotel');

let reservas = [];
let ultimoIdReserva = 0;

function fazerReserva(idHotel, numeroQuarto) {
    const hotelEncontrado = hotel.hoteis.find(h => h.id === idHotel);
    if (!hotelEncontrado) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return;
    }
    if (numeroQuarto > hotelEncontrado.quartosTotais || numeroQuarto < 1) {
        console.log(`Esse quarto não existe no hotel ${hotelEncontrado.nome}.`);
        return;
    }
    const reserva = {
        id: ++ultimoIdReserva,
        idHotel: idHotel,
        numeroQuarto: numeroQuarto,
        status: 'Reservado'
    };
    reservas.push(reserva);
    console.log(`Reserva feita com sucesso. ID da reserva: ${reserva.id}`);
}

function cancelarReserva(idReserva) {
    const index = reservas.findIndex(reserva => reserva.id === idReserva);
    if (index === -1) {
        console.log('Reserva não encontrada.');
        return;
    }
    reservas.splice(index, 1);
    console.log(`Reserva ${idReserva} cancelada com sucesso.`);
}

function listarReservas() {
    if (reservas.length === 0) {
        console.log('Nenhuma reserva encontrada.');
        return;
    }
    console.log('Lista de reservas:');
    reservas.forEach(reserva => {
        console.log(`ID: ${reserva.id}, ID do Hotel: ${reserva.idHotel}, Número do Quarto: ${reserva.numeroQuarto}, Status: ${reserva.status}`);
    });
}

module.exports = {
    reservas,
    fazerReserva,
    cancelarReserva,
    listarReservas
};
