import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { TeamDetailPage } from '../team-detail/team-detail';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../shared/elite-api.service';
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi) { }
  teams = [];
  // teams = [
  //   { id: 1, name: 'HC Elite' },
  //   { id: 2, name: 'Celtics' },
  //   {
  //     id: 3, name: 'Lakers'
  //   }

  // ];
  ionViewLoaded() {
    let selectedTour = this.navParams.data;
    console.log(this.navParams.data);
    this.eliteApi.getTournamentsData(selectedTour.id).subscribe(data => {
      this.teams = data.teams;
      console.log(data.teams);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    let selectedTour = this.navParams.data;

    this.eliteApi.getTournamentsData(selectedTour.id).subscribe(data => {
      this.teams = data.teams;
      console.log(this.teams);
    });
  }

  itemTrapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
