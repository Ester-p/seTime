import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Projects';

@Injectable({
    providedIn: 'root'
})
export class projectService {

    constructor(private http: HttpClient) { }

    url = 'http://localhost:4000/project';
    option = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    addProject(project: Project): Observable<Project> {
        return this.http.post<Project>(`${this.url}/addProject`, project);
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.url}/getProjects`);
    }
    getProjectKey(projectName: string): Observable<string> {
        return this.http.get<string>(`${this.url}/getProjectKey/${projectName}`);
    }
    checkProjectName(projectName): Observable<boolean> {
        console.log("project service work");
        return  this.http.get<boolean>(`${this.url}/checkProjectName/${projectName}`);
    }
}