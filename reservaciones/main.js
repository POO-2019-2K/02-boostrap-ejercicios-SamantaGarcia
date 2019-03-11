import Reservation from './reservacion.js';
import Reservations from './reservaciones.js';


class Main{
    constructor(){
        this._list = new Reservations(document.querySelector('#list'), document.querySelector('#info'));

        document.querySelector('#btn1').addEventListener('click', () => {
            let name = document.querySelector('#name').value;
            let lastname = document.querySelector('#lName').value;
            let nrooms = document.querySelector('#rooms').value;
            let stringDate = document.querySelector('#dReservation').value;
            stringDate = stringDate.split('-');
            let date = new Date(stringDate[0], stringDate[1], stringDate[2]);

            let reservation = new Reservation(name, lastname, nrooms, date);
            this._list.addReservation(reservation);
        });
    }

}

let m = new Main();