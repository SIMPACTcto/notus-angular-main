// auth.service.ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private localStorageKey = "currentUser";

  isAuthenticated(): boolean {
    const currentUser = this.getCurrentUser();
    console.log(currentUser);
    return currentUser && currentUser.result === "1";
  }

  private getCurrentUser() {
    const currentUserString = localStorage.getItem(this.localStorageKey);
    return currentUserString ? JSON.parse(currentUserString) : null;
  }

  login() {
    // Simulating a login, store user information in local storage
    const currentUser = {
      result: "1",
    };
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentUser));
  }

  logout() {
    // Simulating a logout, remove user information from local storage
    localStorage.removeItem(this.localStorageKey);
  }
}