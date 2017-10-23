import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './Layout/topo/topo.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TentativaComponent } from './tentativa/tentativa.component';
import { PainelComponent } from './painel/painel.component';

import { PrincipalComponent } from './principal/principal.component';
import { AppComponent } from "./app.component";
import { TopoComponent } from './Controlador_Layout/topo/topo.component';

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
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
