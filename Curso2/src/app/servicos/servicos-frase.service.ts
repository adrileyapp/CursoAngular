import { Frase } from './../Entidades/shared/frase.model';

import { Injectable } from '@angular/core';

@Injectable()
export class ServicosFraseService {
  FRASES: Array<Frase>;
  constructor() { }

  GetFrases() {
    this.FRASES = [
      new Frase('I like to learn', 'Eu Gosto de Aprender'),
      new Frase('I watch tv', 'Eu Assisto TV'),
      new Frase('close to you', 'Fechado para voce')
    ];
       return this.FRASES;
   }

}
