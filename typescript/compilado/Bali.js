"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Entidades/Carro");
var Concessionaria_1 = require("./Entidades/Concessionaria");
var listaDeCarros = [
    new Carro_1.Carro('gol', 4, 1000),
    new Carro_1.Carro('palio', 2, 10),
    new Carro_1.Carro('verona', 2, 89)
];
var concessionaria = new Concessionaria_1.Concessionaria('Cidade ocidental');
console.log(concessionaria.fornecerEndereco());
for (var index = 0; index < listaDeCarros.length; index++) {
    console.log(listaDeCarros[index]);
}
