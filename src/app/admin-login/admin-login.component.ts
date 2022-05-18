import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  login(form:any)
  {
    console.log(form)
      this.adminService.login(form)
  }

  get email() { return this.loginForm.controls['email']; }
  get password() { return this.loginForm.controls['password']; }

}
