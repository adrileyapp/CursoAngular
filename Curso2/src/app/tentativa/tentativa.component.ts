import { Coracao } from './../Entidades/shared/coracao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit {
   public coracaoCheio = '/assets/coracao_cheio.png';
   public coracaoVazio = '/assets/coracao_vazio.png';
  public coracaoes: Coracao[]= [
      new Coracao(true), new Coracao(true), new Coracao(true)

   ]

  constructor() {
    console.log(this.coracaoes);


   }

  ngOnInit() {
  }

}
