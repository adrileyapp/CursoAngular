"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Entidades/Carro");
var Concessionaria_1 = require("./Entidades/Concessionaria");
var Pessoa_1 = require("./Entidades/Pessoa");
var listaDeCarros = [
    new Carro_1.Carro('GOL', 4, 1000, 1.555),
    new Carro_1.Carro('PALIO', 2, 10, 2.544),
    new Carro_1.Carro('VERONA', 2, 89, 255.44),
    new Carro_1.Carro('BMW', 4, 300, 555.00)
];
var concessionaria = new Concessionaria_1.Concessionaria('Cidade ocidental', listaDeCarros);
//   console.log(concessionaria.fornecerEndereco());
//  console.log(concessionaria.mostrarListaDeCarros());
var cliente = new Pessoa_1.Pessoa('adriley', 'GOL');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
        console.log(JSON.stringify(cliente.dizerCarroQueTem()));
        console.log(Carro_1.teste);
    }
});
