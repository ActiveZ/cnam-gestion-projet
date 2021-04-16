import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string = "";
  password: string = "";

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }


  ngOnInit() {
  }

  onLogin() {
    this.auth.login(this.login, this.password)
      .subscribe(data => {
        // console.log("login data", data[0])
        if (data[0]) {
          this.auth.currentUser = data[0]
          this.router.navigate(['gestion'])
        }
        else {
          alert ("ERREUR ! \nLogin ou mot de passe invalide")
        }
      })
  }
  
}
