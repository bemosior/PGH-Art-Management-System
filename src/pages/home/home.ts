import { Component } from '@angular/core';

import { NavController, Tabs } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

import { Event } from '../../providers/event';
import { EventService } from '../../providers/event.service';

import { LoginPage } from '../login/login';
import { EventListPage } from '../event-list/event-list';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  events: Event[];

  constructor(private navCtrl: NavController, private auth: AuthService, private eventService: EventService) {
    // let info = this.auth.getUserInfo();
    // this.username = info.username;
  }

  getEvents(): void {
    this.eventService.getHomeEvents()
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

  public changeTab(tab: number) {
    let t: Tabs = this.navCtrl.parent;
    t.select(tab);
  }

  public goToEvent(event: Event) {
    if (event.parent) {
      this.navCtrl.push(EventListPage, {
        id: event.id
      });
    } else {
      this.navCtrl.push(EventPage, {
        id: event.id
      });
    }
  }

  public logout() {
    this.auth.logout().subscribe(success => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
