import { Carro } from './Entidades/Carro';
import { Concessionaria } from './Entidades/Concessionaria';
 
      let listaDeCarros: Array <Carro>  = [
       new Carro('gol',4,1000),
       new Carro('palio',2,10),
       new Carro('verona',2,89)
     ]
  let concessionaria = new Concessionaria('Cidade ocidental');
  console.log(concessionaria.fornecerEndereco());

     for (var index = 0; index < listaDeCarros.length; index++) {
           console.log(listaDeCarros[index]);
         
     }

 