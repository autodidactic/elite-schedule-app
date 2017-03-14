

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EliteApi } from '../../shared/elite-api.service';
import { TeamHomePage } from '../team-home/team-home';

import { TournamentsPage } from '../tournaments/tournaments';
@Component({
    templateUrl: 'my-teams.page.html'

})

export class MyTeamsPage {
    constructor(private nav: NavController,
        private loadingController: LoadingController,
        private eliteApi: EliteApi) { }
    favorites = [

        {
            team: { id: 1, name: 'HC elite 7th', coach: 'Steve michellotti' },
            tournamentId: '1',
            tournamentName: 'March Madness Tournament'
        },
        {
            team: { id: 1, name: 'HC elite ', coach: 'John Papa' },
            tournamentId: '2',
            tournamentName: 'Holiday Hoops tournament'
        },

    ];

    favoriteTapped($event, favorite) {
        let loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true

        });
        loader.present();
        this.eliteApi.getTournamentsData(favorite.tournamentId)
            .subscribe(data => this.nav.push(TeamHomePage, favorite.name));
    }
    goToTournament() {
        console.log("inside tournaments");
        this.nav.push(TournamentsPage);
    }
} 