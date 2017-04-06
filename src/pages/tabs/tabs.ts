import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HostListPage } from '../host-list/host-list';
import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = HostListPage;
  tab3Root: any = MapPage;
  tab4Root: any = ProfilePage;

  constructor() {

  }
}
