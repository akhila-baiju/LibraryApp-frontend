import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _loginUrl = 'api/login';
  constructor(private http: HttpClient) { }

  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl,user)
   
  }
  
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
