import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent  {

  constructor(private userService:UserService, private router:Router, private tostr:ToastrService) { }

  roleName=""


  addRole(){
    let role = {"roleName":this.roleName}
    this.userService.addRole(role).subscribe(resp =>{
    this.router.navigateByUrl("/home")
    this.tostr.success("Role add Successfuly")
    },err => {

    })
  }

}
