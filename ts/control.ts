import {Pokemon} from './pokemon';


export class Control {
    pokemons:Array<Pokemon>
    constructor(){
        
    }
    
    init(pokemons:Array<Pokemon>):void{
        this.pokemons = pokemons;
        this.setPokemon(this.pokemons[0]);
    }
    
    private setPokemon(pokemon:Pokemon){
        let image: any;
        let pokedex:any;
        pokedex = {};
        image = document.getElementById("image");
        image.src = pokemon.getImage();
        
        pokedex.image = document.getElementById("image-pokedex");
        pokedex.name= document.getElementById("name");
        pokedex.type= document.getElementById("type");
        pokedex.height= document.getElementById("height");
        pokedex.weight= document.getElementById("weight");
        
        pokedex.image.src = pokemon.getImage();
        pokedex.name.innerHTML = pokemon.getName();
        pokedex.type.innerHTML = pokemon.getType();
        pokedex.height.innerHTML = pokemon.getHeight();
        pokedex.weight.innerHTML = pokemon.getWeight();
    }
    
    catch(){
        let pokedex:any= document.getElementsByClassName('pokedex');
        let pokemon:any= document.getElementsByClassName('pokemon');
        this.pokemons.splice(0, 1);
        if(this.pokemons.length>0){
          this.setPokemon(this.pokemons[0]);  
        }else{
            pokedex[0].classList.add("hide");
            pokemon[0].classList.add("hide");
        }
    }
    
}