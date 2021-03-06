define(["require", "exports"], function (require, exports) {
    "use strict";
    var Pokemon = (function () {
        function Pokemon(type, name, pc, height, weight, image) {
            this.type = type;
            this.name = name;
            this.pc = pc;
            this.height = height;
            this.weight = weight;
            this.catched = false;
            this.image = image;
        }
        Pokemon.prototype.getType = function () {
            return this.type;
        };
        Pokemon.prototype.getName = function () {
            return this.name;
        };
        Pokemon.prototype.getPc = function () {
            return this.pc;
        };
        Pokemon.prototype.getHeight = function () {
            return this.height;
        };
        Pokemon.prototype.getWeight = function () {
            return this.weight;
        };
        Pokemon.prototype.setCatched = function (catched) {
            this.catched = catched;
        };
        Pokemon.prototype.getCatched = function () {
            return this.catched;
        };
        Pokemon.prototype.getImage = function () {
            return this.image;
        };
        return Pokemon;
    }());
    exports.Pokemon = Pokemon;
});
//# sourceMappingURL=pokemon.js.map