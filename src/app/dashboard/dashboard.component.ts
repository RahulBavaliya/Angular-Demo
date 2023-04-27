import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SocialAuthService} from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  
  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) {
}


  
  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }


}
