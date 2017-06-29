import { Component } from '@angular/core'
import { ProjectApiService } from '../service/app.projects-api-service'
import { Project } from '../model/project'

@Component(
    {
        selector: 'app-project-list',
        templateUrl: 'app.projects-list-component.html',
        styleUrls:[],
        providers: [ProjectApiService]
    }
)
export class ProjectListComponent {
    projects: Project[];
    projectService: any;
    project: Project;

    constructor(projectService: ProjectApiService) {
        this.projectService = projectService;
        this.getProjects();
        this.project = new Project();

    }

    getProjects() {
        this.projectService.getProjects().subscribe(t => this.setProjects(t));

    }

    setProjects(projects: Project[]): void {
        this.projects = projects;
        console.log(this.projects);
    }


    updateStatus(project: Project) {

        project.status = "Closed";
        this.projectService.updateStatus(project).subscribe(t => {
            this.getProjects();
        });
    }

    deleteProject(project: Project) {

        this.projectService.deleteProject(project).subscribe(t => {
            this.getProjects();
        });
    }
}