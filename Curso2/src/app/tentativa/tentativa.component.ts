import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit {
   public coracaoCheio = '/assets/coracao_cheio.png';
   public coracaoVazio = '/assets/coracao_vazio.png';
  public h = true;
  public url = 'www.terra.com.br';

  constructor() { }

  ngOnInit() {
  }

}
