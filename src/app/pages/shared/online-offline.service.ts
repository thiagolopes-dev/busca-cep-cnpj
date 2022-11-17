import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {

  private statusConexao$ = new Subject<boolean>();

  constructor(
    private messageService: MessageService
  ) {
    this.ouvirStatusConexao();
    window.addEventListener('online', () => this.atualizaStatusConexao());
    window.addEventListener('offline', () => this.atualizaStatusConexao());
  }

  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  get statusConexao(): Observable<boolean> {
    return this.statusConexao$.asObservable();

  }

  atualizaStatusConexao() {
    this.statusConexao$.next(this.isOnline);
  }

  ouvirStatusConexao() {
    this.statusConexao.subscribe(online => {
      if (online) {
        this.messageService.clear();
        this.messageService.add({ severity: 'success', summary: 'Online', detail: 'Uoww conexão estabelecida!' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Offline', detail: 'Você está offline, verifique sua internet!', sticky: true });
      }
    });
  }

}
