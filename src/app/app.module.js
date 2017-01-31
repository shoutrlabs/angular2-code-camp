import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Module as UsersModule } from './_users';
// import { Module as BoxxModule } from './_boxxs';
import { AppComponent } from './app.component';
import { FunComponent } from './fun.component';
import { InputMaskDirective } from './mask.directive';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    BrowserModule,
    // UsersModule,
    // BoxxModule,
  ],
  declarations: [
    AppComponent,
    FunComponent,
    //UserListComponent,
    InputMaskDirective,
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent], // this is ONLY for the root module
})
export default class { }
