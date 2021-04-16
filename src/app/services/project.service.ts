import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from 'src/environments/environment';
import { Project } from '../models/project.model';

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
export class ProjectService {

  constructor(private http: HttpClient) { }

  // récupération de la liste des projets
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(API_ENDPOINT + 'projects', httpOptions)
  }


  // ajout d'un project
  addProject(project: Project): Observable<Project> {
    delete project.id
    return this.http.post<Project>(API_ENDPOINT + 'projects', project, httpOptions);
  }


  // update d'un project
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(API_ENDPOINT + 'projects/' + project.id, project, httpOptions)
  }


  // suppression d'un project
  removeProject(id: number): Observable<number> {
    return this.http.delete<number>(API_ENDPOINT + 'projects/' + id, httpOptions);
  }
}
