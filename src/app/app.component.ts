import { Component, EventEmitter, Output } from '@angular/core';
import {AuthService} from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  isSignedIn = false
  @Output() isLogout = new EventEmitter<void>()
  constructor(
    private firebaseService: AuthService
  ){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }

  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
    this.isSignedIn=false;
  }

}
