import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';

  constructor(private navCtrl: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info.username;
  }

  public logout() {
    this.auth.logout().subscribe(success => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
