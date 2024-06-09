import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modelos/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://easyevent.api.adsocidm.com/api/users';

  constructor(private http: HttpClient) { }

  getUsers(access_token:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });

    const options = { headers: headers };

    return this.http.get(this.url, options); 
  }

}

