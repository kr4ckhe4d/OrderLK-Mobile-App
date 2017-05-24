import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SignUpPage } from './sign-up-page';

@NgModule({
  declarations: [
    SignUpPage,
  ],
  imports: [
    IonicModule.forRoot(SignUpPage),
  ],
  exports: [
    SignUpPage
  ]
})
export class SignUpPageModule {}
