/**
 * Pokemon
 */
/// <reference path="ipokemon.ts"/>
export class Pokemon{
    
    private type:string;
    private name:string;
    private pc: number;
    private height:number;
    private weight:number;
    private catched:boolean;
    
    constructor(type:string, name:string, pc:number, height:number, weight:number) {
        this.type = type;
        this.name = name;
        this.pc = pc;
        this.height = height;
        this.weight = weight;
        this.catched = false;
        
    }
    
    
    getType():string{
        return this.type;
    }
    
    getName():string{
        return this.name;
    }
    
    getPc():number{
        return this.pc;
    }
    
    getHeight():number{
        return this.height;
    }
    
    getWeight():number{
        return this.weight;
    }
    
    setCatched(catched:boolean){
        this.catched = catched;
    }
    
    getCatched():boolean{
        return this.catched;
    }
}