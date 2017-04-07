import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Host } from './host';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HostService {
  constructor(private http: Http) {}

  getHosts(): Observable<Host[]> {
      return this.http.get('./assets/hosts.json')
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}