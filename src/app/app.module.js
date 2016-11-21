import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyHeaderComponent } from './my-header.component';

const routes = {

};
@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
	],
	declarations: [
		App,
		MyHeaderComponent,
	],
	bootstrap: [App],
})
export class AppModule { }
