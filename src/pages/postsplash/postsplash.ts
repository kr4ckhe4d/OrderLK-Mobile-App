import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, NavOptions } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the Postsplash page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-postsplash',
  templateUrl: 'postsplash.html',
})
export class PostsplashPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Postsplash');
  }

  onLoginClicked() {
    //let modal = this.modalCtrl.create(LoginPage);
    //modal.present();
    this.navCtrl.push(LoginPage);
  }
}
