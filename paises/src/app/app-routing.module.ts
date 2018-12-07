import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CountriesComponent },
  { path: 'detail/:code', component: CountryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
