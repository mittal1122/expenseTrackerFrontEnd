import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service'
@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute, private userService: UserService, private router: Router, private toastr: ToastrService) { }
  roleId = ""
  roleName = ""
  ngOnInit(): void {
    this.roleId = this.aRoute.snapshot.params["roleId"]
    this.getRoleById()
  }

  getRoleById() {
    this.userService.viewRole(this.roleId).subscribe(res => {
      this.roleName = res.roleName
      // console.log(res.roleName);

    }, err => {

    })


  }

  updateRole() {
    let role = {"roleId":this.roleId,"roleName":this.roleName}
    console.log("update-roleComponent - "+role.roleName);
    
    this.userService.updateRole(role).subscribe(res => {
      this.router.navigateByUrl("/user/home")
      console.log("res + "+res.data);
      
      this.toastr.success("update successfuly...")
    }, err => {

    })
  }
}
