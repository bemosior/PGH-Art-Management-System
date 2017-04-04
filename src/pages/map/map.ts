import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  lat: number = 40.4406;
  lng: number = -79.9959;

  constructor(public navCtrl: NavController) {

  }

}
