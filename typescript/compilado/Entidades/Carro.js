"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas, velocidade) {
        if (velocidade === void 0) { velocidade = 0; }
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
exports.Carro = Carro;
/*
videos : Array<Video>;
constructor(){
this.videos = [
new Video(1,"Test","www.test.com","Test Description"),
new Video(2,"Test 2","www.test2.com","Test Description")
]
}

**/ 
