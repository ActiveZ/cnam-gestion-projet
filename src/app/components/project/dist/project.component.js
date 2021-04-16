"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectComponent = void 0;
var core_1 = require("@angular/core");
var project_model_1 = require("src/app/models/project.model");
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService) {
        this.projectService = projectService;
        this.listProjects = []; // liste des projects
        this.newProject = new project_model_1.Project();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    // récupération de la liste des projets
    ProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (data) {
            _this.listProjects = data;
            console.log("list projects component", _this.listProjects);
        });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-project',
            templateUrl: './project.component.html',
            styleUrls: ['./project.component.scss']
        })
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
