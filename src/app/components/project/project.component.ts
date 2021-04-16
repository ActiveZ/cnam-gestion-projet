import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

  listProjects: Project[] = []; // liste des projects
  newProject: Project = new Project();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects()
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
