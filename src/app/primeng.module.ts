import { NgModule } from '@angular/core';
import {ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';

@NgModule({

  exports: [
      ButtonModule,
      CardModule,
      InputTextModule,
      TooltipModule,
      InputMaskModule,
      ToastModule,
      PanelModule
  ]
})
export class PrimengModule { }
