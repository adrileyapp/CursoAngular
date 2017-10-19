import { Carro } from './Carro';
export class Pessoa {  
    private carro: Carro
    constructor( private nome: string,
        private carroPreferido: string) {
            
        }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}
