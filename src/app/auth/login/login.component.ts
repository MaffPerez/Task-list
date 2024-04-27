import { Component } from "@angular/core"
import { Login } from "./login.presenter"
import { User } from "../interface/user.interface"
import { Router } from "@angular/router"
import { AuthService } from "../service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginError = false;

  constructor(
    public presenterLogin: Login,
    public router: Router,
    private authService: AuthService
  ) {
  }

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
