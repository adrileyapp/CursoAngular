//import { PessoaDao } from './Entidades/DaoPessoa';
//import { ConcessionariaDao } from './Entidades/ConcessionariaDao';
import { Veiculo } from './Entidades/Veiculo';
import { Motos } from './Entidades/Moto';
import { Carro}          from './Entidades/Carro';
import { Concessionaria } from './Entidades/Concessionaria';
import { Pessoa }         from "./Entidades/Pessoa";
import { Dao } from "./Entidades/dao";


  let concessionaria = new Concessionaria('',[]);
  let pessoa : Pessoa = new Pessoa('','');
  let dao: Dao<Concessionaria> = new Dao<Concessionaria>() ;
  let dao2: Dao<Pessoa> = new Dao<Pessoa>() ;
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