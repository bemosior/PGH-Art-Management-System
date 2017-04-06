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
  lat: number;
  lng: number;
  zoom: number = 14;

  constructor(public navCtrl: NavController, private eventService: EventService) {

  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(
        events => this.events = events,
        err => {
          console.log(err);
        },
        () => this.calculateFocus()
      );
  }

  // This is a cheap hack.
  calculateFocus(): void {
    var lats = [];
    var lngs = [];

    this.events.forEach(function(event){
      lats.push(event.lat);
      lngs.push(event.lng);
    });

    this.lat = lats.reduce(function(a, b) {
      return a + b;
    }) / lats.length;

    this.lng = lngs.reduce(function(a, b) {
      return a + b;
    }) / lats.length;
  }

  ngOnInit(): void {
    this.getEvents();
  }

}
