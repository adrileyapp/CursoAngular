"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Entidades/Concessionaria");
var Pessoa_1 = require("./Entidades/Pessoa");
var dao_1 = require("./Entidades/dao");
var concessionaria = new Concessionaria_1.Concessionaria('', []);
var pessoa = new Pessoa_1.Pessoa('', '');
var dao = new dao_1.Dao();
var dao2 = new dao_1.Dao();
dao.Atualizar(concessionaria);
dao2.Remover(5);
/* let Dao: ConcessionariaDao = new ConcessionariaDao();

 Dao.Insert(concessionaria);
 let pessoadao : PessoaDao = new PessoaDao();
 
 pessoadao.Atualizar(pessoa);
 */
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
