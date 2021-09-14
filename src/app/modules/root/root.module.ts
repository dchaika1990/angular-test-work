import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './components/root/root.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import { SortPipe } from './sort.pipe';


const routes: Routes = [
	{
		path: '', children: [
			{path: '', component: RootComponent}
		]
	}
]


@NgModule({
	declarations: [RootComponent, SortPipe],
	imports: [
		CommonModule,
		NgbModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forRoot(routes),
		AgmCoreModule,
	],
	exports: [
		RouterModule
	]
})
export class RootModule {
}
