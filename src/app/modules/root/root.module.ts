import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: RootComponent}
    ]
  }
]

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RootModule { }
