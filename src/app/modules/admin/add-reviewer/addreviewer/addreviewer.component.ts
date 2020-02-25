import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addreviewer',
  templateUrl: './addreviewer.component.html',
  styleUrls: ['./addreviewer.component.scss']
})
export class AddreviewerComponent implements OnInit {

  addReviewewForm: FormGroup;
  submitted = false;
  hideProject: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.addReviewewForm = this.formBuilder.group({
      EmployeeId:[''],
      Name: [''],
      IsReviewer: false,
      DefaultProject: [''],
      
    });

  }

  get f() {
    return this.addReviewewForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.addReviewewForm.invalid) {
      console.log("error in form");

      return;
    }
    console.log(this.addReviewewForm.value);
    this.insertRecord();
  }

  myFunction() {

    var res = this.f.IsReviewer.value;
    if (res == true) {
      this.hideProject = false;
    }
    else {
      this.hideProject = true;
    }
  }


  insertRecord() {
    console.log(this.addReviewewForm.value,"Value is above");
        this.submitted = false;
        this.hideProject = false;
        this.addReviewewForm.reset();
   }

    projectList = [
    { id: 1, name: 'Angular 2+' },
    { id: 2, name: 'Angular 4' },
    { id: 3, name: 'Angular 5' },
    { id: 4, name: 'Angular 6' },
    { id: 5, name: 'Angular 7' }
  ];

}