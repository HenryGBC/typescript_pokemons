define(["require", "exports", './pokemon', './pokemons_list', './control'], function (require, exports, pokemon_1, pokemons_list_1, control_1) {
    "use strict";
    var pokemons;
    pokemons = [];
    for (var _i = 0, pokemonsArray_1 = pokemons_list_1.pokemonsArray; _i < pokemonsArray_1.length; _i++) {
        var pokemon = pokemonsArray_1[_i];
        pokemons.push(new pokemon_1.Pokemon(pokemon.type, pokemon.name, pokemon.pc, pokemon.height, pokemon.weight, pokemon.image));
    }
    var control = new control_1.Control();
    control.init(pokemons);
    document.getElementById("pokeball").addEventListener("click", catchPokemon);
    function catchPokemon() {
        control.catch();
    }
});
//# sourceMappingURL=main.js.map