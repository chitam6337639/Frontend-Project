import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Employee { id?: string; name?: string; position?:string; age?:string; startDate?:string; salary?:string; office?:string; status?:boolean}
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {
  private employeesCollection: AngularFirestoreCollection<Employee>;
	employees: Observable<Employee[]>;
	employee1: Employee[] =[];

	//phan trang
	config: any;
	// collection = { count: 60, data: [] };
		  //  items: Item[]=[];
		  constructor(private readonly afs: AngularFirestore) {
			this.employeesCollection = this.afs.collection<Employee>('Employees');
      
			//this.items = this.itemsCollection.valueChanges();
			
			// .valueChanges() is simple. It just returns the 
			// JSON data without metadata. If you need the 
			// doc.id() in the value you must persist it your self
			// or use .snapshotChanges() instead. Only using for versions 7 and earlier
					
			
			
			this.employees = this.employeesCollection.valueChanges( { idField: 'keyid' }); //chỉ sử dụng cho Angular 8,9
			this.employees.subscribe(data=>{console.log(data); this.employee1 = data})
      //id1: ten field đại diện cho documnent id, lưu ý không 
			//được đặt trùng với tên field khai báo trong dữ liệu
			  
			  this.config = {
				itemsPerPage: 5,
				currentPage: 1,
				totalItems: this.employee1.length
			  };
		 }
		





		ngOnInit(): void {
			// this.add('4','Nguyen Thi D', 'Student','QT','45','31/10/2023','16000$')
			// this.add('5','Nguyen Van H', 'Dev','CT','41','15/02/2023','17000$')
			this.add('6','Nguyen Hoang', 'Dev1','NVT','23','16/02/2023','9000$')
			// this.add('7','Le Thi Ba', 'Dev2','QT','80','30/02/2023','10000$')
			// this.update('2','Nguyen Thi B', 'Student','QT','25','29/2/2023','6000$')
			// this.delete()
		}
		add (id:string="default id", name:string="default item",position:string="default positon",office:string="default office",age:string="default age",startDate:string="default startDate",salary:string="default salary",){
			let pro : Employee = {};
			pro.id=id
			pro.position = position
			pro.name = name
			pro.age = age
			pro.office = office
			pro.salary = salary
			pro.startDate = startDate
			
			let docid = "6";
			// tạo docid bằng AngularFirestore
			// const id = this.afs.createId();
		
			//this.itemsCollection.add(it);//thêm với docid tự động tạo
			
			//them vao itemsCollection với docid cụ thể
			this.employeesCollection.doc(docid).set(Object.assign({}, pro));//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
		}
		update(id:string="update id",name:string="update name", position:string="update positon",office:string="update office",age:string="update age",startDate:string="update startDate",salary:string="update salary" ){
			let docId = "2"
			let pro : Employee = {};
			pro.id=id
			pro.position = position
			pro.name = name
			pro.age = age
			pro.office = office
			pro.salary = salary
			pro.startDate = startDate


			this.employeesCollection.doc(docId).update(pro);
			}
		delete(docId = "4"){
				this.employeesCollection.doc(docId).delete();
			}
		pageChanged(event:number){
			this.config.currentPage = event;
		}
}

