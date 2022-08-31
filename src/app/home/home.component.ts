import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roles: Array<any> = []
  roleName:String =""
  display = false;
  constructor(private userService: UserService, private tostr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllRoles().subscribe(resp => {
      // console.log(resp);
      this.roles = resp

    }, err => {
      // console.log(err);
    })
  }

 
  deleteRole(id: any) {
    console.log("delete Role Called" + id);
    this.userService.deleteRole(id).subscribe(res => {
      this.tostr.success("Role Deleted...")
      // console.log(res);
      this.roles = this.roles.filter(r => r.roleId != id)

      //roles => 17
      // let newRoles = []
      // for(let i=0;i<this.roles.length;i++){
      //   if(this.roles[i].roleId != id){
      //     //remove
      //     newRoles.push(this.roles[i]);
      //   }
      // }
    }, err => {
      this.tostr.error(err);
      // console.log(err);

    }
    )
  }

  viewRole(id: any) {
    this.userService.viewRole(id).subscribe(res => {
    this.display=true
    this.roleName = res.roleName
    }, err => {
      this.tostr.error(err);
    }
    )
  }


  

}
