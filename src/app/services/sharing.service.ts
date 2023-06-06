import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class SharingService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private user: UserService) {
    this.user.getUser().then(user=>{
      if(user)
      this.isUserLoggedIn.next(true)
      else{
        this.isUserLoggedIn.next(false)
      }
    } 
    
    )
   }
}
