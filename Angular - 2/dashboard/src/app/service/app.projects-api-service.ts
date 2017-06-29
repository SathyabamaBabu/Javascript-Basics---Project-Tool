import { Injectable } from '@angular/core'
import { Http, Response,RequestOptions,Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Project } from '../model/project';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectApiService {
    private projectsurl = 'http://vdi-sbabu.gotapco.com/projectsapi/api/projects/';


    constructor(private http: Http) {

    }
    getProjects(): Observable<Project[]> {
        return this.http.get(this.projectsurl + "all").map((t: Response) => {
            return <Project[]>t.json();
        }).catch((err: Response) => {
                console.error(err.json().error);
                return Observable.throw(err.json().error || 'Server error');
            });

    }

    addProjects(project: Project):Observable<number>  {
        let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var addUrl=this.projectsurl + "add";
     var post=   this.http.post(addUrl, project,options).map((t:Response)=>t.status)
            .catch((err: Response) => {
                console.error(err.json().error);
                return Observable.throw(err.json().error || 'Server error');
            });
            return post;

    }

     updateStatus(project: Project):Observable<number>  {
        let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var addUrl=this.projectsurl + "update";
     var post=   this.http.put(addUrl, project,options).map((t:Response)=>t.status)
            .catch((err: Response) => {
                console.error(err.json().error);
                return Observable.throw(err.json().error || 'Server error');
            });
            return post;

    }
    
     deleteProject(project: Project):Observable<number>  {
        let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var resourceUrl=this.projectsurl + "delete/" + project.name;
     var post=   this.http.delete(resourceUrl).map((t:Response)=>t.status)
            .catch((err: Response) => {
                console.error(err.json().error);
                return Observable.throw(err.json().error || 'Server error');
            });
            return post;

    }
}
