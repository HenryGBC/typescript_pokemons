/// <reference path="pokemon.ts"/>
/// <reference path="ipokemon.ts"/>

//var Pokemon = module("Pokemon");

import {Pokemon} from './pokemon';

import {IPokemon} from './ipokemon';

let poke:IPokemon;
poke = {
    type: 'volador',
    name: 'pidgey',
    pc: 25,
    height: 2.5,
    weight: 2.3,
    catched: false 
}
var pokemon = new Pokemon(poke.type, poke.name, poke.pc, poke.height, poke.weight);

console.log(pokemon);