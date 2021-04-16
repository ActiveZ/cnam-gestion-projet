import { Component, OnInit } from '@angular/core';
import { Organisme } from 'src/app/models/organisme.model';
import { Project } from 'src/app/models/project.model';
import { User } from 'src/app/models/user.model';
import { OrganismeService } from 'src/app/services/organisme.service';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { OrganismeComponent } from '../organisme/organisme.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

  listProjects: Project[] = []; // liste des projects
  listOrganismes: Organisme[] = [] // liste des organismes pour select
  listUsers: User[] = [];
  newProject: Project = new Project();


  constructor(
    private projectService: ProjectService,
    private organismeService: OrganismeService,
    private userService: UserService
  ) { }


  ngOnInit() {
    this.getProjects()
    this.getOrganismes()
    this.getUsers()

  }


  // récupération de la liste des organismes
  getOrganismes() {
    this.organismeService.getOrganismes()
      .subscribe(data => {
        this.listOrganismes = data
      })
  }


  onChangeOrganisme(project: Project, id: number) {
    project.idOrganisme = Number(id)
    this.onUpdateProject(project)
  }


  // récupération de la liste des users
  getUsers() {
    this.userService.getUsers()
    .subscribe(data => {
      this.listUsers = data
    })
  }


  onChangeLeader(project: Project, id: number) {
    project.idLeader = Number(id)
    this.onUpdateProject(project)
  }

  // récupération de la liste des projets
  getProjects() {
    this.projectService.getProjects()
      .subscribe(data => {
        this.listProjects = data
        console.log("list projects component", this.listProjects)
      })
  }


  onAddProject() {
    this.projectService.addProject(this.newProject)
      .subscribe(() =>
        console.log("newProject", this.newProject))
    this.newProject = new Project()
    this.getProjects()
  }


  onUpdateProject(Project: Project) {
    this.projectService.updateProject(Project)
      .subscribe()
  }


  onRemoveProject(id: number, index: number) {
    this.projectService.removeProject(id)
      .subscribe(() =>
        console.log("id to remove", id))
    this.listProjects.splice(index, 1)
  }
}
