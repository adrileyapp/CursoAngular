"use strict";
var Carro = /** @class */ (function () {
    function Carro(Modelo, NumeroPortas, Velocidade) {
        if (Velocidade === void 0) { Velocidade = 0; }
        this.Modelo = Modelo;
        this.NumeroPortas = NumeroPortas;
        this.Velocidade = Velocidade;
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
/*
  let carro1 = new Carro();
  let carro2 = new Carro();
  let carro3 = new Carro();
  */
