import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './Layout/topo/topo.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TentativaComponent } from './tentativa/tentativa.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ProgressoComponent,
    TentativaComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
