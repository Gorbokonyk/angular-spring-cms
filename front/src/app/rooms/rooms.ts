import {Component, inject, output, signal} from '@angular/core';
import {RoomService} from './service/service';
import {Room} from './models/room.model';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
  standalone: true
})
export class Rooms {
  private roomService: RoomService = inject(RoomService);

  loading = signal(false);
  error = signal<string | null>(null);

  rooms = signal<Room[]>([]);

  toastMessage = signal<string>('');
  isToastVisible = signal<boolean>(false);
  private timerId: any;

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

  diyaNa_Vybir1(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input || !input.value) return;
    // 1. Встановлюємо текст та показуємо вікно
    this.toastMessage.set(`Ви залочили: ${input.value}`);
    this.isToastVisible.set(true);

    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    this.timerId = window.setTimeout(() => {
      this.isToastVisible.set(false);
    }, 3000);
  }
}
