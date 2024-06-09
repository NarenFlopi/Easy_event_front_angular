import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://easyevent.api.adsocidm.com/api/auth/';

  constructor(private http: HttpClient) { }

  login (email:any, password:any): Observable <any> {
    return this.http.post(this.url+"login", {email:email, password:password})
  }

  logout(): Observable <any>{
    return this.http.post(this.url+"logout", null)
  }
}
