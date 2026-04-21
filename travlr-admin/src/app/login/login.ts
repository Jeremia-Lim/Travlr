import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  error = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  onLogin() {
    if (!this.credentials.email || !this.credentials.password) {
      this.error = 'All fields required';
      return;
    }

    this.authService.login(this.credentials).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/trips']);
      },
      error: () => {
        this.error = 'Login failed';
      }
    });
  }
}
