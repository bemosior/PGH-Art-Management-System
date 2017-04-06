import { Component } from '@angular/core';
import { EventLocation } from '../../app/eventLocation';
import { EventLocationService } from '../../app/eventLocation.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  eventLocations: EventLocation[];
  lat: number = 40.4406;
  lng: number = -79.9959;
  zoom: number = 14;

  constructor(public navCtrl: NavController, private eventLocationService: EventLocationService) {

  }

  getEventLocations(): void {
    this.eventLocationService.getEventLocations().then(eventLocations => this.eventLocations = eventLocations);
  }

  ngOnInit(): void {
    this.getEventLocations();
  }

}
