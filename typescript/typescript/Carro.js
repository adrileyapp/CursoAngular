"use strict";
var Carro = /** @class */ (function () {
    function Carro() {
        this.Velocidade = 0;
    }
    Carro.prototype.Acelerar = function () {
        this.Velocidade = this.Velocidade + 10;
    };
    Carro.prototype.Para = function () {
        this.Velocidade = 0;
    };
    Carro.prototype.VelocidadeAtual = function () {
        return this.Velocidade;
    };
    return Carro;
}());
var CarroA = new Carro();
console.log(CarroA.Acelerar());
