import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { } from 'ionic-angular';

@Injectable()
export class UserSettings {
    storage = new Storage();
    constructor() { }

    favoriteTeam(team, tournamentId, tournamentName) {
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id, JSON.stringify(item));

    }
}