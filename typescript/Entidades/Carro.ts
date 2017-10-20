import { Veiculo } from './Veiculo';

export class Carro extends  Veiculo {   
   constructor(modelo : string,private numeroDePortas: number) {
       super();
       this.modelo = modelo;
   }
}