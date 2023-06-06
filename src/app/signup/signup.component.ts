import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../models/models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  insertFrm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService ){
    this.insertFrm = this.fb.group({
      email:['',[Validators.email, Validators.required]], 
      pass:['',[Validators.required]],
      // description:[''],
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
  onSubmit(){
    let signup = new Signup();
				//lay thông tin dữ liệu nhập trên form
				// product.id = this.insertFrm.controls["email"].value;
        // product.name = this.insertFrm.controls["pass"].value;
        this.auth.signup(signup.email = this.insertFrm.controls["email"].value, signup.pass = this.insertFrm.controls["pass"].value).then(data=>(console.log(data)))
        // product.price = this.insertFrm.controls["price"].value;
				//...tương tự cho những trường khác
  }
}
