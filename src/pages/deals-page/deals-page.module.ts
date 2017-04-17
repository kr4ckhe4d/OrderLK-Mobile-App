import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { DealsPage } from './deals-page';

@NgModule({
  declarations: [
    DealsPage,
  ],
  imports: [
    IonicPageModule.forChild(DealsPage),
  ],
  exports: [
    DealsPage
  ]
})
export class DealsPageModule {}
