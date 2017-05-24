import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, NavOptions } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { TabsPage } from "../tabs/tabs";


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { SignUpPage } from "../sign-up-page/sign-up-page";
import { RestService } from "../../providers/rest-service";

import { Storage } from '@ionic/storage';

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

  user: Observable<firebase.User>;
  users:any;
  loginInput:{email: String,password: String};

  constructor(public navCtrl: NavController,private storage: Storage, public modalCtrl: ModalController, public navParams: NavParams, public afAuth: AngularFireAuth, public restApi:RestService) {
        this.user = afAuth.authState;
        this.storage.set('access_token', "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Postsplash');
  }

  onLoginClicked() {
    //let modal = this.modalCtrl.create(LoginPage);
    //modal.present();
    this.navCtrl.push(LoginPage);
    //     this.restApi.loginUser()
    // .then(data => {
    //   this.users = data;
    //   console.log(this.users);
    // });
  }

  onSignupClicked(){
    this.navCtrl.push(SignUpPage);
  }

  onSignupWithFB(){

  }
}
