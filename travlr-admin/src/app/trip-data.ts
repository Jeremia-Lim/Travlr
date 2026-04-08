import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripData {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/trips`);
  }

  addTrip(trip: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/trips`, trip);
  }
}
