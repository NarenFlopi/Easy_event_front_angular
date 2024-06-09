import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../modelos/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = 'https://easyevent.api.adsocidm.com/api/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(access_token:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });

    const options = { headers: headers };

    return this.http.get(this.url, options); 
  }

  addCategoria(categoria: Categoria, access_token:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.post(this.url, categoria, options);
  }

  getCategoria(id:string, access_token:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.get(`${this.url}/${id}`, options);
  }

  updateCategoria(id: string, categoria: Categoria, access_token:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.put(`${this.url}/${id}`, categoria, options);
  }

  deleteCategoria(id: string, access_token:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const options = { headers: headers };
    return this.http.delete(`${this.url}/${id}`, options);

  }
  
}