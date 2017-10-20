class Entidade {
  private Carro : any;
   public dizerNome():string{
      return this.Nome;
    }    
     public dizerCarroPerfeto():string{
      return this.CarroPerfeito;
    }
      public comprarCarro(carro:any):void{
        this.Carro= carro;
    }

      public dizerCarroQueTem():any{
        return this.Carro;
    }
    
    constructor(private Nome : string, private CarroPerfeito : string) {}
}