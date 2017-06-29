import { Component } from '@angular/core'
import { ProjectApiService } from '../service/app.projects-api-service'
import { Project } from '../model/project'
import {Router} from '@angular/router';


@Component(
    {
        selector: 'app-projects-add',
        templateUrl: 'app.projects-add.component.html',
        styleUrls:[],
        providers: [ProjectApiService]
    }
)
export class ProjectAddComponent {
    projects: Project[];
    projectService: any;
    project: Project;
    router:Router;


    constructor(projectService: ProjectApiService,router:Router) {
        this.projectService = projectService;
        this.getProjects();
        this.project = new Project();
        this.router=router;

    }

    getProjects() {
        this.projectService.getProjects().subscribe(t => this.setProjects(t));

    }

    setProjects(projects: Project[]): void {
        this.projects = projects;
        console.log(this.projects);
    }

    addProjects() {
        this.project.status="Open";
        this.projectService.addProjects(this.project).subscribe(t => {
            this.getProjects();
            this.project = new Project();
            this.router.navigate(['../']);
        });
    }

    

}