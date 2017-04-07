import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Event } from './event';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  constructor(private http: Http) {}

  getEvents(): Observable<Event[]> {
      return this.http.get('./assets/seed.json')
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHomeEvents(): Observable<Event[]> {
    return this.http.get('./assets/seed.json')
      .map((res: Response) => {
        let events = res.json();
        events.forEach(event => {
          if (event.parent_id) {
            let group = events.find((e) => e.id === event.parent_id);
            group.parent = true;
          }
        });
        let homeEvents = events.filter((event) => {
          if (!('parent_id' in event)) {
            return event;
          }
        });
        return homeEvents;
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}