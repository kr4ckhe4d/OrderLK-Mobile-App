import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 user: Observable<firebase.User>;
  loginInput={"email": "","password": ""};

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onCloseClicked() {
    this.viewCtrl.dismiss();
  }

  onLoginClicked() {
    
    this.afAuth.auth.signInWithEmailAndPassword(this.loginInput.email, this.loginInput.password).then((user)=>{
      if(user){
        user = firebase.auth().currentUser;
        console.log("Logged In successfully: " + JSON.stringify(user));
        this.navCtrl.setRoot(TabsPage);
      }
    },(error)=>{
        var errorName = error.name;
        var errorMessage = error.message;
        console.log("errorCode: " + errorName);
        console.log("errorMessage: " + errorMessage);
    })
  }
}
