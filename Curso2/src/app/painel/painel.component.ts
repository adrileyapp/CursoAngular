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
public Resposta : string;
public Rodada:number =0;
public RaodaFase: Frase;
  constructor(private servicosFraseService: ServicosFraseService) {
    this.frases = this.servicosFraseService.GetFrases();
    console.log(this.frases);
   }
    atualizaResposta(Resposta : Event):void{
      this.Resposta = (<HTMLInputElement>Resposta.target).value;
      //console.log(this.Resposta);
    }
    verificarResposta():void{
   //   console.log('Verificar Resposta : '+ this.Resposta );
      alert(this.Resposta);


    }
  ngOnInit() {
  }

}
