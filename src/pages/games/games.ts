import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  games = [
    { location: "Meadowbrook Ct. 4", team1: "DC Premier", team2: "Severn Elite" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.games = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');

  }



}
