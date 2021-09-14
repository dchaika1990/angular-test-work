import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FlashMessagesModule} from "angular2-flash-messages";
import {RootModule} from "./modules/root/root.module";
import {HeaderComponent} from './components/header/header.component';

const apiKey = ''

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgbModule,
		RootModule,
		FlashMessagesModule.forRoot(),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyDRo3awoe0sUiGAwybvJ8yjKCp8DSBJwio'}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
