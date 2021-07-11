import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import {UserService} from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    submitted = false;
  title: any;
  public data1:any;

    constructor(private formBuilder: FormBuilder,private data:UserService,private router:Router ) { }
public s1:any;
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
           
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            
            
        }); 
        if(localStorage.getItem("myData")==null){
          localStorage.setItem("myData",JSON.stringify(this.data.get()));
        }
        this.s1=localStorage.getItem("myData");
       this.data1=JSON.parse(this.s1);
      }
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
          return;
      }
      else{
        var email=(<HTMLInputElement>document.getElementById("email")).value;
        var password=(<HTMLInputElement>document.getElementById("password")).value;
        var count=0;
        for(var i=0;i<this.data1.length;i++){
if((this.data1[i].email==email) && (this.data1[i].password==password)){
  count++;
}
}
if(count==0)
{
  alert("invalid username or password");
}
else{
  alert('Success');
  localStorage.setItem("email",email);
  localStorage.setItem("password",password);
   this.router.navigateByUrl('employeedata');
  }
}
 }
      }
      
     
  

