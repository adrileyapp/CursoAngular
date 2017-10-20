"use strict";
var Entidade = /** @class */ (function () {
    function Entidade(Nome, CarroPerfeito) {
        this.Nome = Nome;
        this.CarroPerfeito = CarroPerfeito;
    }
    Entidade.prototype.dizerNome = function () {
        return this.Nome;
    };
    Entidade.prototype.dizerCarroPerfeto = function () {
        return this.CarroPerfeito;
    };
    Entidade.prototype.comprarCarro = function (carro) {
        this.Carro = carro;
    };
    Entidade.prototype.dizerCarroQueTem = function () {
        return this.Carro;
    };
    return Entidade;
}());
