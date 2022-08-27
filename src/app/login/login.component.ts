import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private sessionService:SessionService, private tostr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let user = {"email":this.email,"password":this.password}
    
    this.sessionService.loginApi(user).subscribe(resp =>{
      
      //json
      console.log("Login Response",resp.data.User);
      if(resp.data.User.role.roleName == "user"){
        this.tostr.success("Login Done")
        this.router.navigateByUrl("/home")
      }else if(resp.data.User.role.roleName == "admin"){
        this.tostr.success("Login Done")
        this.router.navigateByUrl("/dashboard")
      }
      
      
      
    },err =>{
      this.tostr.error("please Try Again")
    })
  
  }

}
