import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IssueCountService {
    
    constructor(private http: Http) { }

    getOpenIssueCount() {
        //  Observable.count() didnt want to work for me for some reason.
        return this.http.get('../../assets/issues.json')
            .map(res => res.json())
            .map(issues => {
                return issues.filter(x => { return x.state === 'Open' }).length
            })
    }
}