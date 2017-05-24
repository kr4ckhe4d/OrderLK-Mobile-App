import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestService } from "../../providers/rest-service";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
access_token:any;
profileData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, public restApi: RestService) {
  }

editProfileClicked(){
                this.storage.get('access_token').then((val) => {
          this.access_token = val;
        console.log('access_token home', val);

        this.restApi.getProfileData(val)
    .then(data => {
      this.profileData = data;
      console.log(this.profileData);
    });
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
                this.storage.get('access_token').then((val) => {
          this.access_token = val;
        console.log('access_token home', val);

        this.restApi.getProfileData(val)
    .then(data => {
      this.profileData = data;
      console.log(this.profileData);
    });
  });
  }

}
