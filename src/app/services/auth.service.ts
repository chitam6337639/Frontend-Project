import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth, private sharingSrv: SharingService,) {  } 
  
  signup(email: string, password:string){
    return new Promise<any>((resolve, reject)=>{
      this.fauth.createUserWithEmailAndPassword(email,password)
      .then(res => {
        resolve(res);
      }, err =>reject(err))
    })

  }
  async loginAuthGmail(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return await this.fauth.signInWithPopup(provider).then(user=>{this.sharingSrv.isUserLoggedIn.next(true)})
  }

  async loginAuthAcc(email:string, pass:string) {
    //let provider = new firebase.auth.GoogleAuthProvider();
    return await this.fauth.signInWithEmailAndPassword(email, pass)
      .then(res => {
        this.sharingSrv.isUserLoggedIn.next(true);
        console.log("Login thanh cong");
      })
  }

  async logout(){
    // this.fauth.signOut();
    return await new Promise<any>((resolve,reject)=>{
		  // if (this.fauth.currentUser){      
			this.fauth.signOut();
			this.sharingSrv.isUserLoggedIn.next(false);//bổ sung dòng này
			resolve("log out");
		  // }else{
			//  reject();
		  // }
	  
		})
  }

  
  // signinFirebase(email: string, password:string){
  //   return new Promise<any>((resolve, reject) => {
  //     this.fauth.signInWithEmailAndPassword(email, password)
  //     .then(res => {       
     
  //     resolve(res);
  //     //this.sharingService.isUserLoggedIn.next(true);
  //     }, err => reject(err))
  //   })
  // }
}
