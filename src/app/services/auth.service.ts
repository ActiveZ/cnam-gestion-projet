import { API_ENDPOINT } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient){ }

  login(login, password): Observable<User> {
    const filter = { where: { and: [{ login: login }, { password: password }] } }
    return this.http.get<User>(API_ENDPOINT + 'users?filter=' + JSON.stringify(filter), httpOptions)
  }
}
