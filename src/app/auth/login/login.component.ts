import { Component } from "@angular/core"
import { Login } from "./login.presenter"
import { User } from "../interface/user.interface"
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    public presenterLogin: Login,
    public router: Router
  ) {}

  validateUser(userCredentials: User) {
    if (userCredentials.user && userCredentials.password === 'test01') {
      this.presenterLogin.form.reset();
      this.router.navigate(['tasks']);
    }
    
  }
}
