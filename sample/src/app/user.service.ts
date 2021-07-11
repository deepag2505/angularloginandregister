import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  value=[
    {
      email:"deepa@gmail.com",password:"deepa"
    }
  ];
  ValidateUser: any;
  get(){
    return this.value;
  }
  set(userDetails:any){
    let sample = {
      email:userDetails.email,password:userDetails.password
    }
    this.value.push(sample);
    console.log("new value",this.value);

  }

  constructor() { }
onSubmit(){
  return true;
}
}