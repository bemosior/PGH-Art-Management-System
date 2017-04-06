import { Injectable } from '@angular/core';
import { EventLocation } from './eventLocation';
import { EVENT_LOCATIONS } from './mock-eventLocation';

@Injectable()
export class EventLocationService {
    getEventLocations(): Promise<EventLocation[]> {
        return Promise.resolve(EVENT_LOCATIONS);
    }
}