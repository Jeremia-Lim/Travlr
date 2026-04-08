import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripData } from '../trip-data';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {
  trips: any[] = [];

  constructor(private tripService: TripData) { }

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (data: any) => {
        console.log(data);
        this.trips = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
