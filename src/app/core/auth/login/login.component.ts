import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*\d).*$/),
    ]),
  });

  ngOnInit(): void {
    this.loginService.initialize();
  }

  onSubmit(): void {
    const login = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (login && password) {
      if (this.loginService.login(login, password)) {
        alert('Login successful');
        this.errorMessage = '';
        this.router.navigate(['/']);
      } else {
        console.log('Login failed. Please check your credentials.');
        this.errorMessage = 'Login failed. Please check your credentials';
      }
    } else {
      console.log('Email or password is empty.');
    }
  }
}
