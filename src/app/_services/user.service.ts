import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  // tslint:disable-next-line: deprecation
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = 'http://localhost:4444/';

    // tslint:disable-next-line: deprecation
    constructor(private http: Http) { }
    postfitnessdata(data) {
      // tslint:disable-next-line: deprecation
      return this.http.post(UserService.BaseUrl + 'allfriends', data, httpOptions).pipe(map((response: Response) => response.json()));
    }
    getfitnessdata() {
      // tslint:disable-next-line: deprecation
      return this.http.get(UserService.BaseUrl + 'allfriends', httpOptions).pipe(map((response: Response) => response.json()));
    }

    createUser() {}
    getAllUser() {}
    updateUser() {}
    deleteUser() {}

}
