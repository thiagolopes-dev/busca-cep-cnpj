import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({

  exports: [
      ButtonModule,
      CardModule,
      InputTextModule,
      TooltipModule,
      InputMaskModule,
      ToastModule,
      PanelModule,
      DialogModule,
      ChipModule
  ]
})
export class PrimengModule { }
