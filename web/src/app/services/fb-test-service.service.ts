import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FbTestServiceService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    const url = `${environment.serviceUrl}/user`;
    return this.http.get<any>(url);
  }
}
