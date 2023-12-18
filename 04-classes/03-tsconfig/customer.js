"use strict";
class customer {
    constructor(thefirst, thelast) {
        this._firstname = thefirst;
        this._lastname = thelast;
    }
    //learing getters and setters in typescript, so similar to java hahah
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastaname(value) {
        this._lastname;
    }
}
//creating an instance
let myCustomer = new customer("David", "Fashola");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
