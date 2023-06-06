import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Signup } from '../models/models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  insertFrm: any;
  email:string = "";
  pass:string ="";
  constructor(private auth:AuthService, private router: Router, private fb: FormBuilder){
    this.insertFrm = this.fb.group({

      password: ['', [Validators.required]],

      email: ['', [Validators.required]],
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    });


  }
  ngOnInit(): void {
      
  }
  loginGmail(){
    this.auth.loginAuthGmail().then(user=>{
    console.log("Login success");
    console.log(user);
    this.router.navigate(["/home"]);

    }, err=>{console.log("login fail"); console.log(err)})
  }

  onSubmit(){
    this.email = this.insertFrm.controls["email"].value;
    this.pass = this.insertFrm.controls["password"].value;

    this.auth.loginAuthAcc(this.email, this.pass).then(user => {
      console.log('Login Acc thanh cong');
      console.log(user);
      //location.href=('/home'); // load lai nguyen trang
      this.router.navigate(["home"]); // loading single page

    }, err => console.log(err))
  }
}
