import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineOfflineService } from './pages/shared/online-offline.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() title = 'App de Consultas';

  constructor(
    private router: Router,
    private onlineOff: OnlineOfflineService
  ) { }

  hideButtons() {
    return this.router.url !== '/cep' && this.router.url !== '/cnpj';
  }
}
