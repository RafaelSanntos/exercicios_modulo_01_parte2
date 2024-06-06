const { reservas } = require('./reserva');

function fazerCheckIn(idReserva) {
    const reserva = reservas.find(reserva => reserva.id === idReserva);
    if (!reserva) {
        console.log('Reserva não encontrada.');
        return;
    }
    reserva.status = 'Check-in feito';
    console.log(`Check-in feito para a reserva ${idReserva}.`);
}

function fazerCheckOut(idReserva) {
    const reserva = reservas.find(reserva => reserva.id === idReserva);
    if (!reserva) {
        console.log('Reserva não encontrada.');
        return;
    }
    reserva.status = 'Check-out feito';
    console.log(`Check-out feito para a reserva ${idReserva}.`);
}

module.exports = {
    fazerCheckIn,
    fazerCheckOut,
};
