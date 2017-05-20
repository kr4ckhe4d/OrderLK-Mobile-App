import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, NavOptions } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { TabsPage } from "../tabs/tabs";


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
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
  loginInput:{email: String,password: String};

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Postsplash');
  }

  onLoginClicked() {
    //let modal = this.modalCtrl.create(LoginPage);
    //modal.present();
    this.navCtrl.push(LoginPage);
  }

  onSignupClicked(){
    this.afAuth.auth.createUserWithEmailAndPassword("nipuna2@xyz.com", "user@123").then(function(user) {
    user = firebase.auth().currentUser;
    console.log("Registered successfully: " + JSON.stringify(user));
}, function(error) {
    // Handle Errors here.
    var errorName = error.name;
    var errorMessage = error.message;
    console.log("errorCode: " + errorName);
    console.log("errorMessage: " + errorMessage);

});
  }

  onSignupWithFB(){

  }
}
