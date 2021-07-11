import { Component, OnInit } from '@angular/core';
import { EmpService } from '../employeedata/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  data:any;
 title = 'Employee Details';
  localStorageService: any;
constructor(private empService: EmpService,private router:Router) {}
      
  ngOnInit(){
   // this.data = this.empService.getData();
   this.empService.getData().subscribe((emp)=>(this.data=emp))
  }

logout(){
  localStorage.removeItem('email');
  localStorage.removeItem('password');
   this.router.navigate(['login']);
}
    }
    





