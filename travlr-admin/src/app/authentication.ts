import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post(`${this.apiBaseUrl}/login`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('travlr-token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('travlr-token');
  }
}
