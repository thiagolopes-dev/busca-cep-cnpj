import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './pages/cep/cep.component';
import { CepRountingModule } from './pages/cep/cep.routing';
import { CepService } from './pages/cep/cep.service';
import { CnpjComponent } from './pages/cnpj/cnpj.component';
import { CnpjRountingModule } from './pages/cnpj/cnpj.routing';
import { CnpjService } from './pages/cnpj/cnpj.service';
import { PrimengModule } from './primeng.module';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { ToastrModule } from 'ngx-toastr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CnpjComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxViacepModule,
    CommonModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    CepRountingModule,
    CnpjRountingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    CepService,
    CnpjService,
    MessageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
