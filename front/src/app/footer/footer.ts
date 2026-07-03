import { Component, EventEmitter, output, Output } from '@angular/core';
import {TestDto } from "../dto/test.dto";

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone: true
})
export class Footer {

  currentYear = new Date().getFullYear();

  testDtoExample: TestDto = {
    id: 1,
    roomNumber: '101',
    pricePerNight: 850,
    isAvailable: true,
    createdAt: new Date().toISOString()
  }

  subscribeClicked = output<TestDto>();

  onSubscribe(): void {
    this.subscribeClicked.emit(this.testDtoExample);
  }
}
