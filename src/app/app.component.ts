import { Component } from '@angular/core';
import { AuthenticService } from './service/authentic.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formlogin';

  constructor(public authenticationService: AuthenticService){

  }

  logout(){
    this.authenticationService.logout();
  }
}
