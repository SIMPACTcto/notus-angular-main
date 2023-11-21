// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe(
        (response: any) => {
          if (response.result === '1') {
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Login failed');
            // Handle login failure
          }
        },
        error => {
          console.error('Login error', error);
          // Handle login error
        }
      );
    }
  }
}
