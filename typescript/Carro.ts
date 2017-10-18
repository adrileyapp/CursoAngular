 
 
export class Carro {
  
   
  

    /**
     *
     */
    constructor(  private Modelo: string,  private NumeroPortas: number,  private Velocidade: number = 0) {
        
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
let CarroA = new Carro('gol',4,100);
CarroA.Acelerar();
console.log(CarroA.VelocidadeAtual());