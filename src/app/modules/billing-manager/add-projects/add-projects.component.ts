import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingManagerService } from '../billing-manager.service';


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {

  addForm: FormGroup;

  submitted = false;
  //public codeValue: string;

  clientList = [
    { Id: 1, Name: 'SEDC' },
    { Id: 2, Name: 'angular' },
    { Id: 3, Name: 'Angular 5' },
    { Id: 4, Name: 'Angular 6' },
    { Id: 5, Name: 'Angular 7' }
  ];



  constructor(private formBuilder: FormBuilder, private billingmanagerservice: BillingManagerService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        projectname: ['', Validators.required],
        client: ['']
      }
    )


  }
  get f() {
    return this.addForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      console.log(this.addForm.value);
      return;
    }
    this.AddClient(this.addForm);

  }
  onReset() {
    this.addForm.reset();
  }

  AddClient(form) {

    this.billingmanagerservice.postClient(form).subscribe(
      res => {
        console.log(this.addForm.value);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addForm.value));
        this.addForm.reset();
      },
      err => {
        console.log(err);
      }
    )
  }
  AddProject(data){
    this.billingmanagerservice.postProject(data).subscribe(
      res => {
        console.log(this.addForm.value);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addForm.value));
        this.addForm.reset();
      },
      err => {
        console.log(err);
      }
    )
   
  }

}
