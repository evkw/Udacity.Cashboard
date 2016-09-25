import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IssueService {

    constructor(private http: Http) { }

    getIssues() {
        return this.http.get('../../assets/issues.json')
            .map(res => res.json())
            .map(res => this.toArray(res));
    }

    toArray(issues: any[]) {
        let list: string[][] = [];
        issues.forEach(issue => {
            let subList: string[] = [];
            subList.push(issue.id);
            subList.push(issue.state);
            subList.push(issue.raised);
            subList.push(issue.comments);
            list.push(subList);
        })
        return list;
    }
}