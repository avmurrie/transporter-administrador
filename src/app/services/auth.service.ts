import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI='http://ApiEMPRESA';

  constructor(
    private http:HttpClient
  ) { }

  login(user){
    return this.http.post(this.API_URI+'/login',user);
  }
}
