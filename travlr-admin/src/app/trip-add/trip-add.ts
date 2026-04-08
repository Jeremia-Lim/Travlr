import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TripData } from '../trip-data';

@Component({
  selector: 'app-trip-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trip-add.html',
  styleUrl: './trip-add.css'
})
export class TripAdd {
  trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  message = '';

  constructor(private tripService: TripData) { }

  onSubmit(): void {
    this.tripService.addTrip(this.trip).subscribe({
      next: (data) => {
        console.log('Trip added:', data);
        this.message = 'Trip added successfully';

        this.trip = {
          code: '',
          name: '',
          length: '',
          start: '',
          resort: '',
          perPerson: '',
          image: '',
          description: ''
        };
      },
      error: (err) => {
        console.error(err);
        this.message = 'Error adding trip';
      }
    });
  }
}
