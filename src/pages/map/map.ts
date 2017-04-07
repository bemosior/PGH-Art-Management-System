import { Component } from '@angular/core';
import { Event } from '../../app/event';
import { EventService } from '../../app/event.service';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  events: Event[];
  lat: number;
  lng: number;
  iconUrl: string = 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png';
  zoom: number = 11;

  constructor(public navCtrl: NavController, private eventService: EventService, private platform: Platform, private geolocation: Geolocation) {

  }

  getPosition(): void {
    var subscription = this.geolocation.watchPosition()
      .subscribe(
        pos => { 
          this.lat = pos.coords.latitude,
          this.lng = pos.coords.longitude
        },
        err => {
          console.log(err);
          // Fall back to event-based focus.
          this.calculateFocus();
        },
        () => { subscription.unsubscribe(); }
      );
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
    this.getPosition();
    this.getEvents();
  }

}
