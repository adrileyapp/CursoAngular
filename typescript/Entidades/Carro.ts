export class Carro {  
 
   constructor(private modelo: string , private numeroDePortas: number, private velocidade: number = 0) {
 
   }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}
   
 

/*
videos : Array<Video>;
constructor(){
this.videos = [
new Video(1,"Test","www.test.com","Test Description"),
new Video(2,"Test 2","www.test2.com","Test Description")
]
}

**/