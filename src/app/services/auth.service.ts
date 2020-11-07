import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { AdminUser } from '../models/admin-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userInfor: Observable<firebase.User>;
  public userApp: AdminUser;
  public currentUser:any;

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { 
    this.getUserInformation();
    this.getCurrentUser();
  }
  
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))})
     .catch( err =>{
      alert(err);
    } )
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

  getUserInformation(){
    this.userInfor= this.firebaseAuth.user;

    this.userInfor.subscribe(
      user =>{
        console.log('Infor > ',user);
        this.userApp={
          uid:user.uid,
          email:user.email,
        
        }
      }
    );
  }

  getCurrentUser(){
    this.firebaseAuth.onAuthStateChanged(
      user => {
        console.log('Change: ',user);
        this.currentUser = user;
      }
    );
    return this.currentUser;
  }

}

