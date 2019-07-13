import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedin:boolean=false;
  
  constructor() { }

  verifyUser (username:string, password:string):boolean{
    if(username == 'brian' &&  password == 'venisha') {
      this.isLoggedin=true;
      return true;
    }
    return false;
  }

  isLogged():boolean {
    return this.isLoggedin;

  }

  logOut(){
    this.isLoggedin=false;
  }
}
