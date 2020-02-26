import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUserStory } from './new-user-story.model';
import { Project } from 'src/app/shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class NewUserStoryService {
  readonly rootUrl='https://localhost:44399';
  list:NewUserStory[];
  constructor(private http:HttpClient ) { 
  }

  getProjects(){
  }
  postUserStory(userStoryFormData){
    return this.http.post(this.rootUrl+'/PostUserStory',userStoryFormData)
  }

}
