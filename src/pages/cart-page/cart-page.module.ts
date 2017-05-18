import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CartPage } from './cart-page';

@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicModule.forRoot(CartPage),
  ],
  exports: [
    CartPage
  ]
})
export class CartPageModule {}
