import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamDetailPage } from '../team-detail/team-detail';
import { StandingsPage } from '../standings/standings';
import { TeamsPage } from '../teams/teams.page';
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  team: any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }
  goHome() {
    console.log("going back home");
    //this.navCtrl.push(TeamsPage);
    this.navCtrl.popToRoot();
  }

}
