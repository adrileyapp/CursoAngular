class Concessionaria{
   
    private ListaDeCarros:any
    /**
     *
     */
    constructor( private Endereco: string) {
         
        
    }



    public ForneceEndereco(): string{
       return this.Endereco;

    }
    public MostrarListaDeCarros(): any{
       return this.ListaDeCarros;
    }
}

let Concessionarias = new Concessionaria('SQ 15 Quadra 01 casa 14 ');
console.log(Concessionarias);