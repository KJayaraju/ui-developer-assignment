import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  showError = false;
  passwordError = false;

  constructor(private router: Router) {}

  // runs automatically while typing
  validate() {
    this.showError = false;
    this.passwordError = false;

    if (!this.username || !this.password) {
      this.showError = true;
      return;
    }

    if (this.password.length <= 5) {
      this.passwordError = true;
    }
  }

  login() {
    // final validation before submit
    this.validate();

    if (this.showError || this.passwordError) {
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/templates']);
  }
}

