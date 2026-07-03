import {Component, inject, signal} from '@angular/core';
import {RoomService} from './service/service';
import {Room} from './models/room.model';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms {
  private roomService: RoomService = inject(RoomService);

  loading = signal(false);
  error = signal<string | null>(null);

  rooms = signal<Room[]>([]);
  constructor() {
    this.roomService.getRooms().subscribe({
      next: (roomData) => {
        this.rooms.set(roomData);
        this.loading.set(false);
      },
      error: (errRoom) => {
        console.error('Помилка завантаження кімнат:', errRoom);
        this.error.set('Не вдалося завантажити кімнати');
        this.loading.set(false);
      }
    });
  }
}
