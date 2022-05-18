import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path:"acc",
    component:NavbarComponent,
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
    ]
  },
  {
    path:"",
    redirectTo:"acc/login",
    pathMatch:"full"
  },
  {
    path:"admin",
    component:NavbarComponent,
    children:[
      {
        path:"",
        component:AdminLoginComponent
      },
      {
        path:"info",
        component:AdminServicesComponent
      }

    ]
  },
  {
    path:"dashboard",
    component:UserNavbarComponent,
    children:[{
      path:"user",
      component:UserPageComponent
    },
    {
      path:"cart",
      component:CartComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
