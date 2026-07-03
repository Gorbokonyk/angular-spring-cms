import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  private token = signal<string | null>(localStorage.getItem('token'));
  private role = signal<string | null>(localStorage.getItem('userRole'));

  isLoggedIn = computed(() => !!this.token());
  isAdmin = computed(() => this.role() === 'admin');


  login(token: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', role);
    this.token.set(token);
    this.role.set(role);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this.token.set(null);
    this.role.set(null);
  }
}
