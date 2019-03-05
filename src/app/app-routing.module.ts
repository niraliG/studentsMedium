import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { ReadingsectionComponent } from './readingsection/readingsection.component';

const routes: Routes = [{
  path: "ADD POST",
  component : AddpostComponent
}, {
  path:"Reading Section",
  component: ReadingsectionComponent
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
