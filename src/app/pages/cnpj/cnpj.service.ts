import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  apiUrl: string;

  constructor(private http: HttpClient) {

    this.apiUrl = `https://brasilapi.com.br/api/cnpj/v1`;
   }

}
