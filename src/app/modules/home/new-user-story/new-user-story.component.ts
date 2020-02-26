import { Component, OnInit } from '@angular/core';
import { NewUserStoryService } from './new-user-story.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'
import { ProjectService } from 'src/app/shared/services/project.service';
import { NewUserStory } from './new-user-story.model';
import { from } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-new-user-story',
  templateUrl: './new-user-story.component.html',
  styleUrls: ['./new-user-story.component.scss']
})
export class NewUserStoryComponent implements OnInit {
  userstoryForm: FormGroup;
  submitted = false;
  hourHide: boolean = false;

  constructor(private newUserStoryService: NewUserStoryService,
              private formBuilder: FormBuilder,
              private projectService:ProjectService,
              private authService:AuthService) { }

  ngOnInit() {
    this.projectService.getProjects();
    this.newUserStoryService.getProjects();
    
    this.userstoryForm = this.formBuilder.group({
      Id:[''],
      Name: [''],
      ProjectId: [''],
      IsRecurring: false,
      DefaultHours: [],
      
    });

  }

  get f() {
    return this.userstoryForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.userstoryForm.invalid) {
      console.log("error in form");

      return;
    }
    console.log(this.userstoryForm.value as NewUserStory);
    this.insertUserStoryRecord(this.userstoryForm.value as NewUserStory);
  }

  RecurringFunction() {
    var res = this.f.IsRecurring.value;
    if (res == true) {
      this.hourHide = false;
    }
    else {
      this.hourHide = true;
    }
  }


  insertUserStoryRecord(form:NewUserStory) {
    var newUserStory  =   new NewUserStory();
    newUserStory.Name = form.Name;
    newUserStory.ProjectId = form.ProjectId;
    newUserStory.DefaultHours = form.DefaultHours;
    newUserStory.IsRecurring = form.IsRecurring;
    newUserStory.EmployeeId = this.authService.currentUserValue.EmployeeId;
    console.log(this.userstoryForm.value,"Value is above");
    this.newUserStoryService.postUserStory(newUserStory).subscribe(
      res => {
        this.submitted = false;
        this.hourHide = false;
        this.userstoryForm.reset();
      },
      err => {
        console.log(err);
      }
    )
    // this.userstoryForm.reset();
  }

  // codeList = [
  //   { id: 1, name: 'Angular 2+' },
  //   { id: 2, name: 'Angular 4' },
  //   { id: 3, name: 'Angular 5' },
  //   { id: 4, name: 'Angular 6' },
  //   { id: 5, name: 'Angular 7' }
  // ];

}