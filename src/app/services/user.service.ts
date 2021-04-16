import { API_ENDPOINT } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
export class UserService {

  constructor(private http: HttpClient) { }

  // récupération de la liste des utilisateurs (employés)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_ENDPOINT + 'users', httpOptions);
  }


  // ajout d'un utilisateur
  addUser(user: User): Observable<User> {
    delete user.id
    return this.http.post<User>(API_ENDPOINT + 'users', user, httpOptions);
  }

  // update d'un utilisateur
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(API_ENDPOINT + 'users/' + user.id, user, httpOptions)
  }


  // suppression d'un utilisateur
  removeUser(id: number): Observable<number> {
    return this.http.delete<number>(API_ENDPOINT + 'users/' + id, httpOptions);
  }
}
