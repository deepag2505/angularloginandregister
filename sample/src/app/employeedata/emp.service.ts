import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class EmpService {
url='http://localhost:4000';
constructor(private http: HttpClient) { }

getData(){
  return this.http.get(`${this.url}/employees`);
        }
      }
   