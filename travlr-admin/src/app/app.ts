import { Component } from '@angular/core';
import { TripList } from './trip-list/trip-list';
import { TripAdd } from './trip-add/trip-add';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripList, TripAdd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'travlr-admin';
}
