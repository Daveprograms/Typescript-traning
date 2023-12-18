"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer = void 0;
class customer {
    constructor(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
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
exports.customer = customer;
