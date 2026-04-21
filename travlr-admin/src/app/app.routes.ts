import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { TripList } from './trip-list/trip-list';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'trips', component: TripList }
];
