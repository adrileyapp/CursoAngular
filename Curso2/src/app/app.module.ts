import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PrincipalComponent } from './principal/principal.component';
import { AppComponent } from "./app.component";
import { TopoComponent } from './Controlador_Layout/topo/topo.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    AppComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
