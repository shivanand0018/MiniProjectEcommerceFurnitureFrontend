import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  login(form:any)
  {
    console.log(form)
      this.loginService.login(form).subscribe(data=>{
          alert("Login Successful");
          this.router.navigate(['dashboard/user'])
      },
      error=>{alert("login unsuccessful")},
    )
  }

  get email() { return this.loginForm.controls['email']; }
  get password() { return this.loginForm.controls['password']; }

  register()
  {
    this.router.navigate(['acc/register'])
  }
}
