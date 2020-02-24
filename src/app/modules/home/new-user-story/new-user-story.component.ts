import { Component, OnInit } from '@angular/core';
import { NewUserStoryService } from './new-user-story.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-new-user-story',
  templateUrl: './new-user-story.component.html',
  styleUrls: ['./new-user-story.component.scss']
})
export class NewUserStoryComponent implements OnInit {
  userstoryForm: FormGroup;
  submitted = false;
  hourHide: boolean = false;

  constructor(private newUserStoryService: NewUserStoryService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newUserStoryService.getProjects();
    
    this.userstoryForm = this.formBuilder.group({
      Id:[],
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
    console.log(this.userstoryForm.value);
    this.insertRecord();
  }

  myFunction() {
    var res = this.f.IsRecurring.value;
    if (res == true) {
      this.hourHide = false;
    }
    else {
      this.hourHide = true;
    }
  }


  insertRecord() {
    // this.newUserStoryService.postData(this.userstoryForm).subscribe(
    //   res => {
    //     this.submitted = false;
    //     this.hourHide = false;
    //     this.userstoryForm.reset();
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
    this.userstoryForm.reset();
  }

  // codeList = [
  //   { id: 1, name: 'Angular 2+' },
  //   { id: 2, name: 'Angular 4' },
  //   { id: 3, name: 'Angular 5' },
  //   { id: 4, name: 'Angular 6' },
  //   { id: 5, name: 'Angular 7' }
  // ];

}