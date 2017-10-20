"use strict";
var Concessionaria = /** @class */ (function () {
    /**
     *
     */
    function Concessionaria(Endereco) {
        this.Endereco = Endereco;
    }
    Concessionaria.prototype.ForneceEndereco = function () {
        return this.Endereco;
    };
    Concessionaria.prototype.MostrarListaDeCarros = function () {
        return this.ListaDeCarros;
    };
    return Concessionaria;
}());
var Concessionarias = new Concessionaria('SQ 15 Quadra 01 casa 14 ');
console.log(Concessionarias);
