import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestService } from "../../providers/rest-service";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DealsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deals-page',
  templateUrl: 'deals-page.html',
})
export class DealsPage {
  rows: number[];
  products: {}[];
  users = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi:RestService,private storage: Storage) {
    this.users = this.getUsers();

            this.storage.get('access_token').then((val) => {
        console.log('access_token', val);
  });

    this.products= [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10,"src": "https://ae01.alicdn.com/kf/HTB1oxcKJVXXXXboXFXXq6xXFXXXj/Summer-Style-Cotton-font-b-Shirt-b-font-Mash-M-A-S-H-Red-Cross-Mens.jpg"},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 1, "title": "iPhone 4 ", "price": 500.01, "inventory": 2, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 2, "title": "Vader T-Shirt White", "price": 10.99, "inventory": 10, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 3, "title": "Backstreet Boys - Sucker CD", "price": 19.99, "inventory": 5, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 1, "title": "Gslaxy S7", "price": 500.01, "inventory": 2, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 2, "title": "Laptop", "price": 10.99, "inventory": 10, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "src":"http://www.vodafone.co.uk//cs/groups/public/documents/webcontent/ipad_pro_9.7_space_grey_350x35.jpg"}
];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
    this.rows = Array.from(Array(Math.ceil(this.products.length / 2)).keys());
  }

  getUsers() {
    this.restApi.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
}

}
