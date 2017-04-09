import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ProfilePage } from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomePage;
  tab3Root = HomePage;
  tab4Root = HomePage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
