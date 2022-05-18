import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router:Router,private httpClient:HttpClient) { }

  login(form:any)
  {
    if(form.email=="Admin" && form.password=="12345")
    {
      alert("Login Successful");
      this.router.navigate(['admin/info']);
    }
    else
    {
      alert("Login Unsuccessful");
    }
  }

  add(form:any)
  {
    return this.httpClient.post<any>('http://localhost:8081/api/v2/add', form)
  }

  getFurniture()
  {
    return this.httpClient.get<any>('http://localhost:8081/api/v2/getFurniture');
  }

  delete(idNo:number)
  {
    console.log(idNo);
    return this.httpClient.delete<any>('http://localhost:8081/api/v2/delete/'+idNo);
  }
}
