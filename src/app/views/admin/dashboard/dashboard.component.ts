// dashboard.component.ts
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-dashboard",
  template: './dashboard.component.html',
  styles: [`
    /* Add your component styles here */
  `],
})
export class DashboardComponent implements OnInit {
  currentUser = {
    result: "1",
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Check authentication status on component initialization
    this.checkAuthentication();
  }

  // Function to check authentication and redirect if needed
  checkAuthentication() {
    if (this.currentUser.result === "1" && this.authService.isAuthenticated()) {
      // Redirect to the dashboard route
      this.router.navigate(['/admin/dashboard']);
    } else {
      // Handle the case when the user is not authenticated
      // You might want to redirect them to the login page or take appropriate action
    }
  }
}