export class shape{
    private _x: any;
    private _y: any;
    constructor(private_x: number,private_y: number ){
        
    }
    
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    

    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    getInfo():string{
        return  `x=${this._x}, y=${this._y}`;
    }
}