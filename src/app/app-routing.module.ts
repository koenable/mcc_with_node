import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { OurcompanyComponent } from './ourcompany/ourcompany.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'ourcompany', component: OurcompanyComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }