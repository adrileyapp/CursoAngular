import { ServicosFraseService } from '../servicos/servicos-frase.service';
import { Frase } from './../Entidades/shared/frase.model';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
public frases: any;
public instrucao : string = 'Traduza a frase ';
public Resposta : string = '';
public Rodada:number= 0;
public RaodaFase: Frase;
public progresso : number = 0 ;
  constructor(private servicosFraseService: ServicosFraseService) {
    this.frases = this.servicosFraseService.GetFrases();
   this.RaodaFase = this.frases[this.Rodada];
   console.log(this.RaodaFase );
   }
    atualizaResposta(Resposta : Event):void{
      this.Resposta = (<HTMLInputElement>Resposta.target).value;
      //console.log(this.Resposta);
    }
    verificarResposta():void{
   //
   if(this.RaodaFase.frasePtbr == this.Resposta){
     alert('Tradução correta ! ');
      this.Rodada++;
      this.progresso = this.progresso +25; //(100/this.frases.length);
      console.log( this.progresso);
      this.RaodaFase = this.frases[this.Rodada];
      this.Resposta = "";
   }else{
     alert('Tradução Errada ! ');

   }


    }

  ngOnInit() {
  }

}
