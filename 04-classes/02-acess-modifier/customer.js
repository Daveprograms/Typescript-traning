var customer = /** @class */ (function () {
    function customer(thefirst, thelast) {
        this._firstname = thefirst;
        this._lastname = thelast;
    }
    Object.defineProperty(customer.prototype, "firstname", {
        //learing getters and setters in typescript, so similar to java hahah
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "lastaname", {
        set: function (value) {
            this._lastname;
        },
        enumerable: false,
        configurable: true
    });
    return customer;
}());
//creating an instance
var myCustomer = new customer("David", "Fashola");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
