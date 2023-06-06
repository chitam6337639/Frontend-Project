import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/models';
import { ProsService } from '../services/pros.service';

@Component({
  selector: 'app-insertnode',
  templateUrl: './insertnode.component.html',
  styleUrls: ['./insertnode.component.css']
})
export class InsertnodeComponent implements OnInit{
  insertFrm: FormGroup;
  constructor(private fb: FormBuilder , private service:ProsService){
    this.insertFrm = this.fb.group({
      id:['',Validators.required], 
      name:['',[Validators.required]],
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
    let product = new Product();
				//lay thông tin dữ liệu nhập trên form
				product.id = this.insertFrm.controls["id"].value;
        product.name = this.insertFrm.controls["name"].value;
        // product.price = this.insertFrm.controls["price"].value;
				//...tương tự cho những trường khác
				
				this.service.insertProduct(product).subscribe(data=>console.log(data)); //gọi với tên hàm tương ứng với bước số 7
  }
}
