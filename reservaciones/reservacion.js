export default class Reservation{
    constructor(name, lastname, nrooms, date){
        this._name = name;
        this._lastname = lastname;
        this._nrooms = nrooms;
        this._date = date;
    }

    get name(){
        return this._name;
    }
    get lastname(){
        return this._lastname;
    }
    get nrooms(){
        return this._nrooms;
    }
    get date(){
        return this._date;
    }
    
}