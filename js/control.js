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
        Control.prototype.catch = function () {
            var pokedex = document.getElementsByClassName('pokedex');
            var pokemon = document.getElementsByClassName('pokemon');
            this.pokemons.splice(0, 1);
            if (this.pokemons.length > 0) {
                this.setPokemon(this.pokemons[0]);
            }
            else {
                pokedex[0].classList.add("hide");
                pokemon[0].classList.add("hide");
            }
        };
        return Control;
    }());
    exports.Control = Control;
});
//# sourceMappingURL=control.js.map