class Pessoa {  
    private carro: any
    constructor( private nome: string,
        private carroPreferido: string) {
            
        }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarror(carro: any): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}
