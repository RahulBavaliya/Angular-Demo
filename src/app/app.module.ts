import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { GoogleLoginProvider,  SocialLoginModule } from 'angularx-social-login';
 
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
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('574913494954-t9vse310scnr9hglffdcm2ehdcp5s2jc.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuardService,
    CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
