import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {TestDto} from './dto/test.dto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularLearn');


  private readonly _count = signal(0);

  handleSubscribe(testDto: TestDto){
    alert(testDto.pricePerNight);
  }
}
