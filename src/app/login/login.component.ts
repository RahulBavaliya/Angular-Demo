import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from '@abacritt/angularx-social-login';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;
  // constructor(){}
  constructor(private router: Router,
    private socialAuthService: SocialAuthService) {
}


ngOnInit() {
  this.socialAuthService.authState.subscribe(user => {
    this.user = user;
  });
}

// googleLoginOptions = {
//   scope: 'profile email'
// }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
      // .then(() => this.router.navigate(['dashboard']));

      // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions ).then((data) => {
      //   console.log(data);
      // }).catch(data => {
      //   this.socialAuthService.signOut();
      //   this.router.navigate(['login']);
      // });
  }


}
