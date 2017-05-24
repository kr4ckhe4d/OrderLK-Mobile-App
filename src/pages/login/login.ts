import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { SignUpPage } from "../sign-up-page/sign-up-page";
import { RestService } from "../../providers/rest-service";

import { Storage } from '@ionic/storage';

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
  accessToken:any;

 user: Observable<firebase.User>;
  loginInput={"email": "","password": ""};

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public afAuth: AngularFireAuth, private restApi:RestService, private storage: Storage,public alertCtrl:AlertController) {
        this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onCloseClicked() {
    this.viewCtrl.dismiss();
  }

    onSignupClicked(){
    this.navCtrl.push(SignUpPage);
  }

  onLoginClicked() {

            this.restApi.loginUser(this.loginInput.email,this.loginInput.password)
    .then(data => {
      if(data){
              this.accessToken = data;
      console.log(this.accessToken);
      this.storage.set('access_token', data).then(()=>{
              this.navCtrl.setRoot(TabsPage);      

      });


}else{
    this.presentConfirm("Login Failed", "Please try again.");
}


  //       this.storage.get('access_token').then((val) => {
  //       console.log('access_token', val);
  // });
    });
    
    // this.afAuth.auth.signInWithEmailAndPassword(this.loginInput.email, this.loginInput.password).then((user)=>{
    //   if(user){
    //     user = firebase.auth().currentUser;
    //     console.log("Logged In successfully: " + JSON.stringify(user));
    //     this.navCtrl.setRoot(TabsPage);
    //   }
    // },(error)=>{
    //     var errorName = error.name;
    //     var errorMessage = error.message;
    //     console.log("errorCode: " + errorName);
    //     console.log("errorMessage: " + errorMessage);
    // })
  }

  presentConfirm(title,message) {
  let alert = this.alertCtrl.create({
    title: title,
    message: message,
    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
}
}
