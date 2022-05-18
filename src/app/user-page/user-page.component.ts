import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private loginServices:LoginService) { }

  ngOnInit(): void {
    this.loginServices.getAllFurniture().subscribe((data)=>{
      this.Furniture=data
    })
  }

  Furniture:any=[]

  cart(furniture:any)
  {
    var cartDetails={
      product:furniture,
      quantity:this.selected.value
    }
    console.log(cartDetails);
    
    this.loginServices.addToCart(cartDetails).subscribe(()=>
    {
      alert("added to cart")
    })
  } 
  selected=new FormControl('')


}
