import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http) { }
    
    onSignIn(username: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:59555/api/token", "username=TEST&password=TEST123", options);

    }
}