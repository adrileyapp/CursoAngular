import { Carro,teste}          from './Entidades/Carro';
import { Concessionaria } from './Entidades/Concessionaria';
import { Pessoa }         from "./Entidades/Pessoa";

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