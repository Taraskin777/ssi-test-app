import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatButton, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  logOut(): void {
    this.loginService.logout();
  }

  isAdmin(): boolean {
    return this.loginService.getUserRole() === 'admin';
  }
}
