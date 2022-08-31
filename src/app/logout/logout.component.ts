import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../Service/auth-token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthTokenService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.authService.authToken = ""
    this.router.navigateByUrl("/login")
    this.toastr.success("Logout...")
  }

}
