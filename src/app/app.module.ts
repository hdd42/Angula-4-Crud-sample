import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { UstMenuComponent } from './ust-menu/ust-menu.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import { environment } from '../environments/environment';

import {UserService} from "./user.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AktifmiPipe } from './aktifmi.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDeleteConfirmComponent } from './user-delete-confirm/user-delete-confirm.component';
import { UserFormComponent } from './user-form/user-form.component';

//RxJs Operator Imports
import './RxImports'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "./messages.service";


@NgModule({
  declarations: [
    AppComponent,
    AnaSayfaComponent,
    UstMenuComponent,
    UserListComponent,
    UserItemComponent,
    AktifmiPipe,
    UserDetailsComponent,
    UserDeleteConfirmComponent,
    UserFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    UserService,MessageService,
    {provide:'API', useValue:environment.API}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
