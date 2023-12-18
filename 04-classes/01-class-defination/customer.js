var customer = /** @class */ (function () {
    function customer(thefirst, thelast) {
        this.firstname = thefirst;
        this.lastname = thelast;
    }
    return customer;
}());
//creating an instance
var myCustomer = new customer("David", "Fashola");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);


