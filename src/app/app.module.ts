import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { GoogleLoginProvider,  SocialAuthServiceConfig,  SocialLoginModule } from '@abacritt/angularx-social-login';
 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 

import { AuthGuardService } from './auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
 
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('696666863447-rjgov73h20c3tshl3pmamnd2r294ko3l.apps.googleusercontent.com')
        }
      ]
    }as SocialAuthServiceConfig,
  },
    AuthGuardService,
    CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
