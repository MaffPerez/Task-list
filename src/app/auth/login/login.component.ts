import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginPresenter } from './login.presenter';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoginError = false;

  constructor(
    public presenterLogin: LoginPresenter,
    public router: Router,
    private authService: AuthService
  ) {}

  validateUser(userCredentials: User) {
    const isAuthenticated = this.authService.isValidUser(userCredentials.user, userCredentials.password);
    if (isAuthenticated) {
      this.router.navigate(['tasks']);
    } else {
      this.isLoginError = true;
    }
    this.presenterLogin.form.reset();
  }

}
