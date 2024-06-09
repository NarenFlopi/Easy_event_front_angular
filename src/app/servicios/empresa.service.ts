import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../modelos/empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = 'https://easyevent.api.adsocidm.com/api/empresa';

  constructor(private http: HttpClient) { }

  getEmpresas(access_token:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });

    const options = { headers: headers };

    return this.http.get(this.url, options); 
  }

  addEmpresa(empresa: Empresa, access_token:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.post(this.url, empresa, options);
  }

  getEmpresa(id:string, access_token:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.get(`${this.url}/${id}`, options);
  }

  updateEmpresa(id: string, empresa: Empresa, access_token:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.put(`${this.url}/${id}`, empresa, options);
  }

  deleteEmpresa(id: string, access_token:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.delete(`${this.url}/${id}`, options);

  }
  
}