import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { AuthTokenGuard } from './Guard/auth-token.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AddUserComponent } from './user/add-user/add-user.component';
const routes: Routes = [
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
 
  {component:UserLayoutComponent,path:"user",children:[
    {component:HomeComponent,path:"home"},
    {component:AddRoleComponent,path:"addrole" },
    {component:UpdateRoleComponent,path:"viewrole/:roleId" },
    {component:AddUserComponent,path:"adduser"},
    {component:LogoutComponent,path:"logout"},

  
  ],canActivate:[AuthTokenGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
