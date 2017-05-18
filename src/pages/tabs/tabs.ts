import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ProfilePage } from "../profile/profile";
import { DealsPage } from "../deals-page/deals-page";
import { CartPage } from "../cart-page/cart-page";

@Component({
  selector: 'tab-pane',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DealsPage;
  tab3Root = CartPage;
  // tab4Root = HomePage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
