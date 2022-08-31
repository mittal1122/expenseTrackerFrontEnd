import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }
//promise   alternative for Observable
 signupApi(user:any):Observable<any>{
    return this.http.post(environment.url+"public/signup",user)
    // return this.http.post("http://localhost:9997/public/signup",user)
 }

 loginApi(user:any):Observable<any>{
  return this.http.post(environment.url+"public/login",user)
    // return this.http.post("http://localhost:9997/public/login",user)
 }
}
