"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DaoPessoa_1 = require("./Entidades/DaoPessoa");
var ConcessionariaDao_1 = require("./Entidades/ConcessionariaDao");
var Concessionaria_1 = require("./Entidades/Concessionaria");
var Pessoa_1 = require("./Entidades/Pessoa");
var Dao = new ConcessionariaDao_1.ConcessionariaDao();
var concessionaria = new Concessionaria_1.Concessionaria('', []);
Dao.Insert(concessionaria);
var pessoadao = new DaoPessoa_1.PessoaDao();
var pessoa = new Pessoa_1.Pessoa('', '');
pessoadao.Atualizar(pessoa);
/*

let carro  = new Carro('GOL',2);

let moto = new Motos();
carro.acelerar();
carro.acelerar();
moto.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);

   let listaDeCarros: Array <Carro>=[
        new Carro('GOL',4,1000,1.555),
        new Carro('PALIO',2,10,2.544),
        new Carro('VERONA',2,89,255.44),
        new Carro('BMW',4,300,555.00)
    ]
   let concessionaria = new Concessionaria('Cidade ocidental',listaDeCarros);
   //   console.log(concessionaria.fornecerEndereco());
    //  console.log(concessionaria.mostrarListaDeCarros());

   let cliente = new Pessoa('adriley','GOL');
       concessionaria.mostrarListaDeCarros().map((carro:Carro) =>{
          if(carro['modelo'] == cliente.dizerCarroPreferido()){
                  cliente.comprarCarro(carro)
                  console.log(JSON.stringify(cliente.dizerCarroQueTem()));
                  console.log(teste);
            }
      });
       */ 
