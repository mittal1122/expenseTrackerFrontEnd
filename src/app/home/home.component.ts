import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roles :Array<any> = []

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllRoles().subscribe(resp =>{
      console.log(resp);
      this.roles = resp
      
    },err => {
      console.log(err);
    })
  }

  deleteRole(id:any){
    console.log("delete Role Called"+id);
  }

}
