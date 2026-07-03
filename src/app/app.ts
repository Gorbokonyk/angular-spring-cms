import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from './test-component/test-component';
import {Header} from './header/header';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularLearn');


  private readonly _count = signal(0);
}
