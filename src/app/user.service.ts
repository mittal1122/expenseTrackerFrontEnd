import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<any> {
    // let headers = new HttpHeaders().set("authToken", "iUIxh7StLCw8FZ9s")

    // let headers = new HttpHeaders();
    // headers = headers.append('authToken','iUIxh7StLCw8FZ9s');
    // console.log(headers.get("authToken"));

    return this.http.get(environment.url +"admin/role")
    
    // return this.http.get("http://localhost:9997/admin/role")

  }

  addRole(role:any): Observable<any> {
    return this.http.post(environment.url+"admin/role",role)
    // return this.http.post("http://localhost:9997/admin/role",role)
  }

  deleteRole(roleId:any):Observable<any>{
    return this.http.delete(environment.url+"admin/role/"+roleId)
  }

  viewRole(roleId:any):Observable<any>{
    return this.http.get(environment.url+"admin/role/"+roleId)
  }
  updateRole(role:any):Observable<any>{
    console.log("userService - "+role);
    
    return this.http.put(environment.url+"admin/role/",role)
  }
} 
