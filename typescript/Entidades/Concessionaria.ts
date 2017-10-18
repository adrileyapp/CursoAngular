class Concessionaria {
   
    private listaDeCarros: any

    constructor( private endereco: string) { }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}