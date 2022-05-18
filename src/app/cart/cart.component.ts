import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.getCartItems().subscribe((data)=>{
      this.Furniture=data;
      console.log(this.Furniture.length);
      
      for (let index = 0; index < this.Furniture.length; index++) {
        this.total+=this.Furniture[index].product.productPrice*this.Furniture[index].quantity
        console.log(this.total);
      }
    })
    
  }

  total:number=0

  Furniture:any=[]

  delete(idNo:any)
  {
    console.log(idNo);
    this.loginService.delete(idNo).subscribe(()=>
    {
      window.location.reload();
    })
  }


}
