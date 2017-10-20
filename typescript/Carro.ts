   class Carro {
   constructor(  public Modelo:       string,  
                 private NumeroPortas: number,  
                 private Velocidade:   number = 0)
              { 
                  
             
    }
    public Acelerar(): void {
      this.Velocidade = this.Velocidade + 10;
    }
    public Para(): void {
       this.Velocidade = 0;
    }
    public VelocidadeAtual(): number {
       return this.Velocidade;
    }

}

   

/*
  let carro1 = new Carro();
  let carro2 = new Carro();
  let carro3 = new Carro();
  */
 