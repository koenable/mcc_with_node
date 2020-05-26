import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';


import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/http.service";
import { OurcompanyComponent } from './ourcompany/ourcompany.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurcompanyComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
