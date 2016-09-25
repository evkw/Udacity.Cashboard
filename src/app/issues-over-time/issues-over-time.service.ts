import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IssuesOverTimeService {

    constructor(private http: Http) { }

    getIssuesOverTime() {
       return this.http.get('../../assets/issues-over-time.json')
        .map(res => res.json());
    }
}