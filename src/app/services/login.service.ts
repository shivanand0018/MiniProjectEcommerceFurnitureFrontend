import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(form:any)
  {
    return this.httpClient.post<any>('http://localhost:8085/api/v1/login',form)
  }

  register(form: any) {
    console.log(form);
    return this.httpClient.post<any>('http://localhost:8085/api/v1/user', form)
  }

  getAllFurniture()
  {
    return this.httpClient.get<any>('http://localhost:8081/api/v2/getFurniture')
  }

  addToCart(cart:any)
  {
    console.log(cart);
    
      return this.httpClient.post<any>('http://localhost:3000/cart',cart)
  }

  getCartItems()
  {
    return this.httpClient.get<any>('http://localhost:3000/cart')
  }

  delete(idNo:any)
  {
    return this.httpClient.delete<any>(`http://localhost:3000/cart/${idNo}`)
  }
}
