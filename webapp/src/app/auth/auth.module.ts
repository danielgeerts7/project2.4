import { MapboxModule } from './../mapbox/mapbox.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginModule } from '../login/login.module';
import { Interceptor } from './intercepter.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GuardService } from './guard.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    //AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    MapboxModule
  ],
  providers: [ AuthService,
    GuardService,
  ],
})
export class AuthModule { }
