import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output()title = 'App de Consultas';

constructor(
  private router: Router
 ) { }

hideButtons() {
  return this.router.url !== '/cep' && this.router.url !== '/cnpj';
}
}
