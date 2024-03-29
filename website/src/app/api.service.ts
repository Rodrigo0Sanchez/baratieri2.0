import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = `https://3000-tomato-cricket-knnrs8qp.ws-eu04.gitpod.io/`;

  constructor(private http: HttpClient) { }

  getDogList() {
    return this.http.get(`${this.url}getDogList`);
  }

}
