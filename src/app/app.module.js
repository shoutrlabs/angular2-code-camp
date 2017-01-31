import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import UserModule from './user'

@NgModule({
  imports: [
    BrowserModule,
    UserModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent], // this is ONLY for the root module
})
export default class { }
