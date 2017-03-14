import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import * as moment from 'moment';

import { EliteApi } from '../../shared/elite-api.service';
import { UserSettings } from '../../shared/user-settings.service';
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
  dateFilter: string;
  allGames: any[];
  team: any;
  games: any[];
  teamStanding: any[];
  private tourdata: any;
  useDateFilter: false;
  constructor(private navCtrl: NavController,
    private navParams: NavParams, private eliteApi: EliteApi, private userSettings: UserSettings) {

    this.team = this.navParams.data;
    console.log("**nav params" + this.navParams.data);
  }
  ionViewDidLoad() {
    this.team = this.navParams.data;
    this.tourdata = this.eliteApi.getCurrentTour();

    //  console.log("list of data" + this.tourdata.games);
    this.games = _.chain(this.tourdata.games)
      .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
      .map(g => {
        let isTeam1 = (g.team1Id === this.team.id);
        let opponentName = isTeam1 ? g.team2 : g.team1;
        let scoreDisplay = this.getScoresDisplay(isTeam1, g.team1Score, g.team2Score);

        return {
          gameid: g.id,
          opponent: g.opponentName,
          time: g.time,
          location: g.location,
          locationUrl: g.locationUrl,
          scoresDisplay: scoreDisplay,
          homeAway: (isTeam1 ? "vs" : "at")
        };
      })
      .value();
    this.allGames = this.games;
    this.teamStanding = _.find(this.tourdata.standings, {
      'teamId': this.team.id
    });

    //this.userSettings.isFavoriteTeam(this.team.id).then(value => this.isFollowing = value);
  }

  getScoreWorL(game) {
    return game.scoresDisplay ? game.scoresDisplay[0] : "L"
  }

  getScoreDisplayBadgeClass(game) {
    return game.scoresDisplay.indexOf("W:") === 0 ? 'badge-primary' : 'badge-danger';
  }

  dateChanged() {
    if (this.useDateFilter) {
      this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
    }
    else {
      this.games = this.allGames;
    }

  }
  ionViewLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

  getScoresDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W: " : "L";
      return winIndicator + team1Score + " - " + opponentScore

    }
    else {
      return "";
    }
  }
}
