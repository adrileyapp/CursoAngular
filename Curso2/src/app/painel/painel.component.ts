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
  constructor(private servicosFraseService: ServicosFraseService) {
    this.frases = this.servicosFraseService.GetFrases();
    console.log(this.frases);


   }

  ngOnInit() {
  }

}
