/// <reference path="pokemon.ts"/>
/// <reference path="ipokemon.ts"/>

//var Pokemon = module("Pokemon");

import {Pokemon} from './pokemon';
import {pokemonsArray} from './pokemons_list';
import {Control} from './control';


let pokemons:Array<Pokemon>;
pokemons = [];
//var pokemon = new Pokemon(poke.type, poke.name, poke.pc, poke.height, poke.weight);

for(let pokemon of pokemonsArray){
    pokemons.push(new Pokemon(pokemon.type, pokemon.name, pokemon.pc, pokemon.height, pokemon.weight, pokemon.image))
}

//instance control init

let control = new Control();
control.init(pokemons);