import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string = "";
  password: string = "";

  constructor(private auth: AuthService) { }


  ngOnInit() {
  }

  onLogin() {
    this.auth.login(this.login, this.password)
  }
}
