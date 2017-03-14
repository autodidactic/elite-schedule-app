import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage } from '../my-teams/my-teams.page';
import { TeamsPage } from '../teams/teams.page';
import { EliteApi } from '../../shared/elite-api.service';
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {
  tournaments: any;
  currentTour: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private eliteApi: EliteApi, private loadingController: LoadingController) { }

  ionViewDidLoad() {
    let loaded = this.loadingController.create({
      content: 'Getting tournment...'

    });
    loaded.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loaded.dismiss();
      });
    });
    //this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }

  itemTrapped($event, tour) {
    this.navCtrl.push(TeamsPage, tour);
  }
  navigate() {
    this.navCtrl.push(MyTeamsPage);
  }


}
