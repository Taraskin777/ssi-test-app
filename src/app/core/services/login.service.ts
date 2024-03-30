import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly loginKey = 'userLogin';
  private readonly passwordKey = 'userPassword';
  private readonly isAuthorizedKey = 'isAuthorized';
  private readonly userRoleKey = 'userRole';

  constructor() {}

  private isFirstVisit(): boolean {
    return (
      localStorage.getItem(this.loginKey) === null ||
      localStorage.getItem(this.passwordKey) === null
    );
  }

  private saveLoginAndPassword(login: string, password: string): void {
    localStorage.setItem(this.loginKey, login);
    localStorage.setItem(this.passwordKey, password);
  }

  private saveUserRole(role: string): void {
    localStorage.setItem(this.userRoleKey, role);
  }

  checkCredentials(login: string, password: string): boolean {
    const storedLogin = localStorage.getItem(this.loginKey);
    const storedPassword = localStorage.getItem(this.passwordKey);

    return login === storedLogin && password === storedPassword;
  }

  setAuthorizationStatus(status: boolean): void {
    localStorage.setItem(this.isAuthorizedKey, status.toString());
  }

  getAuthorizationStatus(): boolean {
    const isAuthorized = localStorage.getItem(this.isAuthorizedKey);
    return isAuthorized ? JSON.parse(isAuthorized) : false;
  }

  isUserAuthorized(): boolean {
    return this.getAuthorizationStatus();
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.userRoleKey);
  }

  login(login: string, password: string): boolean {
    if (this.checkCredentials(login, password)) {
      this.setAuthorizationStatus(true);
      this.saveUserRole('admin');
      return true;
    }
    return false;
  }

  logout(): void {
    this.setAuthorizationStatus(false);
    localStorage.removeItem(this.userRoleKey);
  }

  initialize(): void {
    if (this.isFirstVisit()) {
      this.saveLoginAndPassword('fake@email.com', 'fakepass123');
    }
  }
}
