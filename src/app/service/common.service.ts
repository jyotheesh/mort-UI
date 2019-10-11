import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getLoginUrl(value: any) {
    return this.http.post('http://10.117.189.190:4433/mortgageapp/auth/login', value);
  }
}
