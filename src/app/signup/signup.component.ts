import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = ""
  email = ""// auto - string 
  password: string = ""

  printData() {
    console.log(this.firstName)
    console.log(this.email);
    console.log(this.password);
  }
}
