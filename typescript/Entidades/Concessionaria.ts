import { Carro } from './Carro';
export class Concessionaria {

    constructor( private endereco: string,  private listaDeCarros:Array<Carro>) { }

    public fornecerEndereco(): string {
        return this.endereco
    }
    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}