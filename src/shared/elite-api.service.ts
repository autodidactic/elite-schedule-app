import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class EliteApi {
    currentTour: any = {}
    private baseUrl = "https://elite-schedule-app-i2-1d7c2.firebaseio.com";
    constructor(private http: Http) { }
    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        });
    }
    getTournamentsData(tourId): Observable<any> {
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourId}.json`)
            .map((response: Response) => {
                this.currentTour = response.json();
                return this.currentTour;
            });
    }

    getCurrentTour() {
        return this.currentTour;
    }




}