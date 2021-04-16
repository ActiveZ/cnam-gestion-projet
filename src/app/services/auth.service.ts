import { API_ENDPOINT } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

// en-tête commune
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(login, password) {
    const filter = { where: { and: [{ login: login }, { password: password }] } }

    this.http.get<User>(API_ENDPOINT + 'users?filter=' + JSON.stringify(filter), httpOptions)
      .subscribe(data => {
        console.log("user", data[0])
        if (data[0]) {
          this.currentUser = data[0]
          this.router.navigate(['gestion'])
        }
      });
  }
}
