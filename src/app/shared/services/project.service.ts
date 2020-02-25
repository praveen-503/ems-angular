import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment}from '../../../environments/environment'
import { Project } from '../models/project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
readonly apiUri = environment.apiUri;

projectList :Project[];
  constructor(private http:HttpClient,
              ) { }

  //get

  getProjects(){
    return this.http.get(this.apiUri+'/project').subscribe(projects=>{
      this.projectList = projects as Project[];
    });
  }

  //getById

  //post

  //update

  //delete


  
}
