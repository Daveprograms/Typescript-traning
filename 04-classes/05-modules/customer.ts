export class customer {
  


    constructor(  private _firstname: string, private _lastname: string){
        
    }

    //learing getters and setters in typescript, so similar to java hahah

    public get firstname(): string {
        return this._firstname;
    }

  public set firstname(value: string){
    this._firstname =value;
  }

  public get lastname(): string{
    return this._lastname;
  }

  public set lastaname(value: string ){
     this._lastname;
  }

}

