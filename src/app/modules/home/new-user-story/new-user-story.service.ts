import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUserStory } from './new-user-story.model';
import { Project } from 'src/app/shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class NewUserStoryService {
  projectList:Project[]=[
    {Id:10,ClientId:20,Name:"EMS0"},
    {Id:11,ClientId:21,Name:"EMS1"},
    {Id:12,ClientId:22,Name:"EMS2"},
    {Id:13,ClientId:23,Name:"EMS3"},
    {Id:14,ClientId:24,Name:"EMS4"},
    {Id:15,ClientId:25,Name:"EMS5"},
    {Id:16,ClientId:26,Name:"EMS6"},
    {Id:17,ClientId:27,Name:"EMS7"},
    {Id:18,ClientId:28,Name:"EMS8"}
  ];


  readonly rootUrl='';
list:NewUserStory[];
  constructor(private http:HttpClient ) { 

    
  }

  getProjects(){
  }
  postData(formData){
    return this.http.post(this.rootUrl+'/paymentDetail',formData)
  }

}
