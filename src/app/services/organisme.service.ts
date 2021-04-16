import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from 'src/environments/environment';
import { Organisme } from '../models/organisme.model';

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
export class OrganismeService {

  constructor(private http: HttpClient) { }

  // récupération de la liste des organismes
  getOrganismes(): Observable<Organisme[]> {
    return this.http.get<Organisme[]>(API_ENDPOINT + 'organismes', httpOptions);
  }


  // ajout d'un organisme
  addOrganisme(organisme: Organisme): Observable<Organisme> {
    delete organisme.id
    return this.http.post<Organisme>(API_ENDPOINT + 'organismes', organisme, httpOptions);
  }


  // update d'un organisme
  updateOrganisme(organisme: Organisme): Observable<Organisme> {
    return this.http.put<Organisme>(API_ENDPOINT + 'organismes/' + organisme.id, organisme, httpOptions)
  }


  // suppression d'un organisme
  removeOrganisme(id: number): Observable<number> {
    return this.http.delete<number>(API_ENDPOINT + 'organismes/' + id, httpOptions);
  }

}
