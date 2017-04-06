import { Component } from '@angular/core';
import { Event } from '../../app/event';
import { EventService } from '../../app/event.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  events: Event[];
  lat: number = 40.465474;
  lng: number = -79.944844;
  zoom: number = 14;

  constructor(public navCtrl: NavController, private eventService: EventService) {

  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(
        events => this.events = events,
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
    this.getEvents();
  }

}
