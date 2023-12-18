"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
//creating an instance
let myCustomer = new customer_1.customer("David", "Fashola");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
