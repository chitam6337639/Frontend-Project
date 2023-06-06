import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharingService } from '../services/sharing.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})

export class TopbarComponent implements OnInit {
    @ViewChild('closebutton') closebutton: any;
      displayName:string="";
      photoURL:string="";
			constructor(private userService:UserService, private auth: AuthService, private sharingSrv: SharingService, private router: Router) { 
        this.sharingSrv.isUserLoggedIn.subscribe( value =>{
          if(value){
            this.userService.getUser().then(user=> {this.displayName = user.displayName!=null? user.displayName: user.email, this.photoURL = user.photoURL != null ? user.photoURL : user.photoURL});	
				    console.log(this.displayName);	
          }else{
            this.displayName=""
          }
        }


        )
					  
			}
  ngOnInit(): void {
      
  }
  logout(){
    this.auth.logout()
    // location.href = "/login"
    this.closebutton.nativeElement.click();
    this.router.navigate(["/login"])
  }
}
