import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class IssueCountService {
    
    public counter = 0;

    constructor(private http: Http) { }

    openIssue$  = Observable.range(0, 100);

    getOpenIssueCount() {
        return this.http.get('../../assets/issues.json')
            .map(res => res.json())
            .map(issues => {
                return this.counter = issues.filter(x => { return x.state === 'Open' }).length
            })
    }
}
