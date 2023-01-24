import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// https://www.npmjs.com/package/bootstrap
// https://www.npmjs.com/package/font-awesome

// https://www.npmjs.com/package/ngx-toastr
import { ToastrModule } from 'ngx-toastr';
// https://www.npmjs.com/package/animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './_helpers/data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MainComponent } from './main/main.component';

// https://www.npmjs.com/package/sweetalert2

// For Angular In-Memory Web API
// https://www.npmjs.com/package/angular-in-memory-web-api

// Angular widgets built from the ground up using Bootstrap 5
// We are using Tab Widget from here
// ng add @ng-bootstrap/ng-bootstrap
// https://ng-bootstrap.github.io/#/home

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AllUsersComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
