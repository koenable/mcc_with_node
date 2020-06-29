import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { TopnavComponent } from './components/topnav/topnav.component';
// MDB Angular Free
import { IconsModule } from 'angular-bootstrap-md';
import { TournamentComponent } from './components/tournament/tournament.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    TopnavComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    IconsModule

  ],
  providers: [],
  bootstrap: [AppComponent]    
})
export class AppModule { }
