import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { TabsPage } from "../tabs/tabs";


import { RestService } from "../../providers/rest-service";

import { Storage } from '@ionic/storage';
import { LoginPage } from "../login/login";

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up-page',
  templateUrl: 'sign-up-page.html',
})
export class SignUpPage {
  user: Observable<firebase.User>;
  fieldTypes:any;
  registerCredentials = {"fname": "",
                        "lname": "",
                        "email": "",
                        "password": "",
                        "dob": "",
                        "street_address": "",
                        "country": "",
                        "city": "",
                        "postal": "",
                        "contact_no": ""}


  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController, 
  public viewCtrl:ViewController,public loadingCtrl: LoadingController, public afAuth: AngularFireAuth, private restApi:RestService, private elementRef:ElementRef) {
        this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
            this.restApi.getFieldTypes()
    .then(data => {
      this.fieldTypes = data;
      console.log(this.fieldTypes);
    });
  }
  onCloseClicked() {
    this.viewCtrl.dismiss();
  }

  onSignUpClicked(){
                this.restApi.signUpUser(this.registerCredentials)
    .then(data => {
      if(data){
              // this. = data.access_token;
      console.log(data);
      if(data == "Successfully Registered!"){
        this.presentAlert(); 

      }
      // this.storage.set('access_token', data.access_token).then(()=>{
      //         this.navCtrl.setRoot(TabsPage);      

      // });


}else{
}


  //       this.storage.get('access_token').then((val) => {
  //       console.log('access_token', val);
  // });
    });

//       this.presentLoadingDefault();

//     this.afAuth.auth.createUserWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password).then((user)=>{
//           console.log("Registered successfully: " + JSON.stringify(this.user));
          
//           firebase.auth().currentUser;

// user.updateProfile({
//   displayName: "Jane Q. User",
// }).then(function() {
//   console.log("name updated");
//   // Update successful.
// }, function(error) {
//   // An error happened.
// });

//     }).catch((error) => {
//           // Handle Errors here.
//           var errorName = error.name;
//           var errorMessage = error.message;

//           if(errorName == "Error"){

//           this.presentAlert(errorName,errorMessage);
//           console.log("errorCode: " + errorName);
//           console.log("errorMessage: " + errorMessage);
// }else{
//   console.log("Successful");
//   this.presentAlert("Success","Regisreted Successfully!");
// }
// });
  }

presentAlert() {
          let alert = this.alertCtrl.create({
            title: "Registered Successfully!",
            message: "Now you may login to the app",
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                handler: () => {
                          this.viewCtrl.dismiss().then(()=>{
          this.registerCredentials = {"fname": "",
                        "lname": "",
                        "email": "",
                        "password": "",
                        "dob": "",
                        "street_address": "",
                        "country": "",
                        "city": "",
                        "postal": "",
                        "contact_no": ""}
                        
        });
                }
              }
            ]
          });
          alert.present();          
}

// presentLoadingDefault() {
// // if(this.loading){
// //   this.loading.dismiss();
// // }else{  
//   this.loading = this.loadingCtrl.create({
//     content: 'Signing Up...'  
//   });

//   this.loading.present();
// // }}
// }

}
