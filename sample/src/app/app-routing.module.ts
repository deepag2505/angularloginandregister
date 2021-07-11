import { CanactiveGuard } from './canactive.guard';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'employeedata',component:EmployeedataComponent,canActivate:[CanactiveGuard]},
  {path:'register',component:RegisterComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,RegisterComponent,LoginComponent,EmployeedataComponent]


