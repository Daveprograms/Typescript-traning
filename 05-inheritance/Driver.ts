import {shape} from "./shape";
import { circle } from "./circle";

let myshape = new shape (10,15);
console.log(myshape.getInfo());

let mycircle = new circle(5, 10, 20);
console.log(mycircle.getInfo());