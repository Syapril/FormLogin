import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticService {
  private readonly mockedUser = new SignInData('syapril@gmail.com', 'test123');
  isAutenticated = false;
  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean{
    if(this.checkCredentials(signInData)){
      this.isAutenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAutenticated = false;
    return false;
  }
  private checkCredentials(signInData: SignInData): boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }
  private checkEmail(email: string): boolean{
    return email === this.mockedUser.getEmail();
  }
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  logout(){
    this.isAutenticated = false;
    this.router.navigate(['']);
  }
}

