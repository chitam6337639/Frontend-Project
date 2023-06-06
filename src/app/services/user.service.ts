import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fauth: AngularFireAuth) { }
  getUser(){
      return new Promise<any>((resolve, reject) => {
      this.fauth.onAuthStateChanged(function(user){
      if (user) {
        resolve(user);
        // this.sharingSrv.isUserLoggedIn.next(true);
      } else {				 
        reject('No user logged in');
      }
      })
    })
  }
}
