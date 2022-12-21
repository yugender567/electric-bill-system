import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Consumer } from './consumer';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _http: HttpClient) {}

  public loginUserFromRemote(consumer: Consumer): Observable<any> {
    return this._http.post<any>('http://localhost:8082/login', consumer);
  }
  public registerUserFromRemote(consumer: Consumer): Observable<any> {
    return this._http.post<any>('http://localhost:8082/consumers', consumer);
  }
}
