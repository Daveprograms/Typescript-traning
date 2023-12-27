"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
class shape {
    constructor(private_x, private_y) {
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.shape = shape;
