import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZokyaZonksService {

  constructor(private http: HttpClient) { }

  public addZonks(): Observable<any> {
    const url = `${environment.zonksApiUrl}/zonks/add`;
    return this.http.post<any>(url, {});
  }

  public getZonks(): Observable<any> {
    const url = `${environment.zonksApiUrl}/zonks`;
    return this.http.get<any>(url);
  }


}
