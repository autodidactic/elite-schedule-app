import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TeamsPage } from '../pages/teams/teams.page';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamHomePage } from '../pages/team-home/team-home';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { StandingsPage } from '../pages/standings/standings';
import { Page2 } from '../pages/page2/page2';
import { GamesPage } from '../pages/games/games';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage, TeamHomePage, GamesPage,
    StandingsPage, Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage, TeamHomePage, StandingsPage, GamesPage,
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
