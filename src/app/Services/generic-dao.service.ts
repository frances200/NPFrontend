import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GenericDaoService {
  databaseAddress = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  sendGetRequest(urlPath: string, tokenRequired: boolean): Observable<any> {
    let authHeader = null;

    const headers = new HttpHeaders({
      Authorization: ''
    });

    const options = { headers: headers };

    if (tokenRequired) {
      authHeader = 'Bearer ' + this.fetchToken();

      options.headers = options.headers
        .set('Authorization', authHeader);
    }

    return this.http
      .get<any>(this.databaseAddress + urlPath, options);
  }

  sendPostRequest(urlPath: string, body: unknown, tokenRequired: boolean): Observable<any> {
    let authHeader = '';

    if (tokenRequired) {
      authHeader = 'Bearer ' + this.fetchToken();
    }

    return this.http
      .post<any>(this.databaseAddress + urlPath, body, {
        headers: { Authorization: authHeader }
      });
  }

  sendPutRequest(urlPath: string, body: unknown, tokenRequired: boolean): Observable<any> {
    let authHeader = '';

    if (tokenRequired) {
      authHeader = 'Bearer ' + this.fetchToken();
    }

    return this.http
      .put<any>(this.databaseAddress + urlPath, body, {
        headers: { Authorization: authHeader }
      });
  }

  sendDeleteRequest(urlPath: string, tokenRequired: boolean): Observable<any> {
    let authHeader = '';

    if (tokenRequired) {
      authHeader = 'Bearer ' + this.fetchToken();
    }

    return this.http
      .delete<any>(this.databaseAddress + urlPath, {
        headers: { Authorization: authHeader }
      });
  }

    private fetchToken() {
      return window.sessionStorage.getItem("userToken");
    }
  }
