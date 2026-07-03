import { isPlatformBrowser } from "@angular/common";
import {computed, Injectable, signal, inject, PLATFORM_ID } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class AuthService  {

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private token = signal<string | null>(null);
  private role = signal<string | null>(null);

  isLoggedIn = computed(() => !!this.token());
  isAdmin = computed(() => this.role() === 'admin');


  constructor() {
    this.token.set(this.getFromStorage('token'));
    this.role.set(this.getFromStorage('userRole'));
  }


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
