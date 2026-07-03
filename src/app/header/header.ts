import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AuthService} from '../auth/auth';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private authService = inject(AuthService);

  isLoggedIn = this.authService.isLoggedIn;
  isAdmin = this.authService.isAdmin;

  logout(): void {
    this.authService.logout();
  }


}
