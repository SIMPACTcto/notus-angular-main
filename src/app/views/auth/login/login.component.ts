// your.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Update with the correct path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // if (this.authService.isAuthenticated()) {
    //   // User is authenticated, redirect to the dashboard
    //   this.router.navigate(['/dashboard']);
    // }
  }
}
