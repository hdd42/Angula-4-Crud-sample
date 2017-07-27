import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnaSayfaComponent} from "./ana-sayfa/ana-sayfa.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
  {
    path: '',
    component:AnaSayfaComponent,
  },
  {
    path: 'details/:id',
    component:UserFormComponent,
  },
  {
    path:'**',redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
