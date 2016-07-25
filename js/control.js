define(["require", "exports"], function (require, exports) {
    "use strict";
    var Control = (function () {
        function Control() {
        }
        Control.prototype.init = function (pokemons) {
            this.pokemons = pokemons;
            this.setPokemon(this.pokemons[0]);
        };
        Control.prototype.setPokemon = function (pokemon) {
            var image;
            var pokedex;
            pokedex = {};
            image = document.getElementById("image");
            image.src = pokemon.getImage();
            pokedex.image = document.getElementById("image-pokedex");
            pokedex.name = document.getElementById("name");
            pokedex.type = document.getElementById("type");
            pokedex.height = document.getElementById("height");
            pokedex.weight = document.getElementById("weight");
            pokedex.image.src = pokemon.getImage();
            pokedex.name.innerHTML = pokemon.getName();
            pokedex.type.innerHTML = pokemon.getType();
            pokedex.height.innerHTML = pokemon.getHeight();
            pokedex.weight.innerHTML = pokemon.getWeight();
        };
        return Control;
    }());
    exports.Control = Control;
});
//# sourceMappingURL=control.js.map