import { TestBed, inject } from '@angular/core/testing';

import { ServicosFraseService } from './servicos-frase.service';

describe('ServicosFraseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosFraseService]
    });
  });

  it('should be created', inject([ServicosFraseService], (service: ServicosFraseService) => {
    expect(service).toBeTruthy();
  }));
});
