import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  registerForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    rePassword:new FormControl('',[Validators.required])
  })

  register(form:any)
  {
    console.log(form)
    if (form.password==form.rePassword)
    {
      this.loginService.register(form).subscribe(()=> console.log("data saved successfully"))
      alert("Registration Successful")
      this.router.navigate(['acc/login']);
    }
    else{
      alert("Passwords didn't match")
    }
  }

  get email() { return this.registerForm.controls['email']; }
  get password() { return this.registerForm.controls['password']; }
  get rePassword() { return this.registerForm.controls['rePassword']; }

}
