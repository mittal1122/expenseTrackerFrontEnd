import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../Service/auth-token.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private sessionService:SessionService, private tostr:ToastrService, private router:Router, private authTokenService:AuthTokenService) { }

  ngOnInit(): void {
  }

  login(){
    let user = {"email":this.email,"password":this.password}
    
    this.sessionService.loginApi(user).subscribe(resp =>{
      
      //json
      console.log("Login Response",resp.data.User);
      localStorage.setItem("authToken",resp.data.User.authToken)
      this.authTokenService.authToken = resp.data.User.authToken
      if(resp.data.User.role.roleName == "user"){
        this.tostr.success("Login Done")
        this.router.navigateByUrl("/user/home")
      }else if(resp.data.User.role.roleName == "admin"){
        this.tostr.success("Login Done")
        this.router.navigateByUrl("/dashboard")
      }
      
      
      
    },err =>{
      this.tostr.error("please Try Again")
    })
  
  }

}
