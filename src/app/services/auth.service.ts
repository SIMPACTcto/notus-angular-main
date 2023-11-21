// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'your-backend-api-url';
  private tokenKey = 'currentUser';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const data = { username, password };
    return this.http.post(`${this.baseUrl}/auth.php`, data).pipe(
      map((response: any) => {
        if (response.result === '1') {
          localStorage.setItem(this.tokenKey, JSON.stringify(response));
        }
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getToken(): string | null {
    const currentUser = localStorage.getItem(this.tokenKey);
    if (currentUser) {
      const { token } = JSON.parse(currentUser);
      return token;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
