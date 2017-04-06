import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventService } from './event.service';
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { EventListPage } from '../pages/event-list/event-list';
import { EventPage } from '../pages/event/event';
import { HostListPage } from '../pages/host-list/host-list';
import { HostPage } from '../pages/host/host';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthService } from '../providers/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MapPage,
    ProfilePage,
    EventListPage,
    EventPage,
    HostListPage,
    HostPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2GfULjbr99T-Oi377dahA8E5F1EkNHnI'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MapPage,
    ProfilePage,
    HomePage,
    EventListPage,
    EventPage,
    HostListPage,
    HostPage,
    TabsPage
  ],
  providers: [
    EventService,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
