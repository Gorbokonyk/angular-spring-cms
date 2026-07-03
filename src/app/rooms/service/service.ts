import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private http = inject(HttpClient);
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('https://angular-test-mock.free.beeceptor.com');
  }
}
