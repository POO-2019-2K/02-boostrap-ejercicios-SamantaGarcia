export default class Reservations{
    constructor(tableReservaciones, tableInfo){
        this._tableReservaciones = tableReservaciones;
        this._tableInfo = tableInfo;

        this._numRes = 0;
        this._totalRes = 0;
    }

    addReservation(reservation){
        let row = this._tableReservaciones.insertRow(-1);
        let cellItem = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellLastname = row.insertCell(2);
        let cellNumrooms = row.insertCell(3);
        let cellDate = row.insertCell(4);

        this._numRes++;
        

        cellItem.innerHTML = this._numRes;
        cellName.innerHTML = reservation.name;
        cellLastname.innerHTML = reservation.lastname;
        cellNumrooms.innerHTML = reservation.nrooms;
        cellDate.innerHTML = reservation.date;

        this._totalRes = this._totalRes + reservation.nrooms;
        
        this._tableinfo.rows[1].cells[1].innerHTML = this._totalRes;
    }

}