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
            subList.push(issue.submitted);
            subList.push(issue.state);
            subList.push(issue.closed);
            subList.push(issue.description);
            subList.push(issue.customerName);
            subList.push(issue.customerEmail);
            subList.push(issue.employeeName);
            list.push(subList);
        })
        return list;
    }
}