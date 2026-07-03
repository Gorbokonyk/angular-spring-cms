import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private getFromStorage(key: string): string | null {
    if (typeof window === 'undefined') return null; // window немає на сервері
    return localStorage.getItem(key);
  }
}
