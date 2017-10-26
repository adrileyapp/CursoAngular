import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


 export class AppComponent implements OnInit {
  v(){
    alert('Verificar ');

  }
  title = 'Vhs Desenvolvimento.';
  constructor() {}
  ngOnInit() {}
}


