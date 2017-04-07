import { Component } from '@angular/core';

import { Host } from '../../providers/host';
import { HostService } from '../../providers/host.service';
import { NavController } from 'ionic-angular';

import { HostPage } from '../host/host'

@Component({
  selector: 'page-host-list',
  templateUrl: 'host-list.html'
})
export class HostListPage {
  hosts: Host[];

  constructor(private navCtrl: NavController, private hostService: HostService) {}

  getHosts(): void {
    this.hostService.getHosts()
      .subscribe(
        hosts => this.hosts = hosts,
        err => {
          console.log(err);
        }
      )
  }

  goToHost(hostId: number) {
    this.navCtrl.push(HostPage, {
      id: hostId
    })
  }

  ngOnInit(): void {
    this.getHosts();
  }
}