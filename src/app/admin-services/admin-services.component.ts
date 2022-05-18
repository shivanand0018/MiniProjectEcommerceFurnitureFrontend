import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {

  constructor(private adminservices:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminservices.getFurniture().subscribe((data)=>
    {
      this.Furniture=data;
    })
    console.log(this.Furniture);
    
  }

  Furniture:any=[]

  addForm=new FormGroup({
      idNo:new FormControl(),
      productName:new FormControl(''),
      productSize:new FormControl(''),
      productPrice:new FormControl('')

  })

  add(form:any)
  {
    this.adminservices.add(form).subscribe(()=>{
      console.log("added");
      window.location.reload();
    })
  }

  delete(idNo:number)
  {
    this.adminservices.delete(idNo).subscribe(()=>
    {
      alert("Deleted Successfully");
      window.location.reload();
    })
  }

  logout()
  {
    this.router.navigate(['/acc/login'])
  }

}
