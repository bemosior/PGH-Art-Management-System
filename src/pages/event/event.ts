import { Component } from '@angular/core';

import { Event } from '../../providers/event';
import { EventService } from '../../providers/event.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  event: Event;
  isGoing: boolean = false;

  constructor(private navCtrl: NavController, private params: NavParams, private eventService: EventService) {}

  getEvent(): void {
    let id = this.params.get('id');
    this.eventService.getEvent(id)
      .subscribe(
        event => this.event = event,
        err => {
          console.log(err);
        },() => {
          console.log(this.event);
      });
  }

  checkIn(): void {
    this.isGoing = true;
  }

  ngOnInit(): void {
    this.getEvent();
  }
}