import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.products= [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
  {"id": 1, "title": "iPhone 4 ", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "Vader T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Backstreet Boys - Sucker CD", "price": 19.99, "inventory": 5},
  {"id": 1, "title": "Gslaxy S7", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "Laptop", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
    this.rows = Array.from(Array(Math.ceil(this.products.length / 2)).keys())
  }

}
