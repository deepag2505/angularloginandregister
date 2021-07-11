import { UserService } from './user.service';
import { EmpService } from './employeedata/emp.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CanactiveGuard } from './canactive.guard';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeedataComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CanactiveGuard,
    EmpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
