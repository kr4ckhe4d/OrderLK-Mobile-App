import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { StorePage } from "../store/store";

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public menu:MenuController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this.menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

  onFollowClicked() {
    let modal = this.modalCtrl.create(StorePage);
    modal.present();
  }

}
