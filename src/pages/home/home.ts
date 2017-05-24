import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { StorePage } from "../store/store";
import { Storage } from '@ionic/storage';
import { RestService } from "../../providers/rest-service";

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
access_token:any;
stores:any;
baseUrl = 'http://0.0.0.0:8080/api/v1/';
  constructor(public navCtrl: NavController, 
              public menu:MenuController, 
              public navParams: NavParams,
              public modalCtrl: ModalController, private storage:Storage, public restApi: RestService) {
    this.menu.enable(true);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
                this.storage.get('access_token').then((val) => {
          this.access_token = val;
        console.log('access_token home', val);

                    this.restApi.getStores(val)
    .then(data => {
      this.stores = data;
      console.log(this.stores);
    });
  });


  }

  onFollowClicked() {
    // let modal = this.modalCtrl.create(StorePage);
    // modal.present();
    this.restApi.getStores(this.access_token)
    .then(data => {
      this.stores = data;
      console.log(this.stores);
    });
  }

}
