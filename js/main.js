define(["require", "exports", './pokemon'], function (require, exports, pokemon_1) {
    "use strict";
    var poke;
    poke = {
        type: 'volador',
        name: 'pidgey',
        pc: 25,
        height: 2.5,
        weight: 2.3,
        catched: false
    };
    var pokemon = new pokemon_1.Pokemon(poke.type, poke.name, poke.pc, poke.height, poke.weight);
    console.log(pokemon);
});
//# sourceMappingURL=main.js.map