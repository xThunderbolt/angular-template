import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ToastHostComponent} from './toast-host/toast-host.component';

@NgModule({
	declarations: [
		AppComponent,
		ToastHostComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,

		NgbModule,

		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
