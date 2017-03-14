import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
//import { Page2 } from '../pages/page2/page2';
import { EliteApi } from '../shared/elite-api.service';
import { StandingsPage } from '../pages/standings/standings';
import { GamesPage } from '../pages/games/games';
import { UserSettings } from '../shared/user-settings.service';
@Component({
  templateUrl: 'app.html',
  providers: [EliteApi, UserSettings]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goHome() {
    this.nav.push(MyTeamsPage);
  }
  goToTournaments() {
    this.nav.push(TournamentsPage);
  }
  goToGames() {
    this.nav.push(GamesPage);
  }
}
