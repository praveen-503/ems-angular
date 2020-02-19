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
 
  constructor(private userService: NewUserStoryService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.userstoryForm = this.formBuilder.group({
      story: [''],
      project: [''],
      recurring: false,
      hours: []
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
    this.submitted = false;
    this.hourHide=false;
    this.userstoryForm.reset();
  }

  myFunction() {
    var res = this.f.recurring.value;
    if (res == true) {
      this.hourHide = false;
    }
    else {
      this.hourHide = true;
    }
  }
}
