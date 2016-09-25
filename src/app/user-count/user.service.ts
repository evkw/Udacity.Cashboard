import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUsersOverTime() {
       return this.http.get('../../assets/users-over-time.json')
        .map(res => res.json());
    }
}