import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';
import { EventListPage } from '../event-list/event-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EventListPage;
  tab2Root: any = MapPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
