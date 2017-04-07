import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  public login(credentials) {
    // if (credentials.use === null || credentials.password === null) {
      // return Observable.throw("Please insert credentials");
    // } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        this.currentUser = new User('Test123');
        observer.next(true);
        observer.complete();
      });
    // }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
