import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Reviewer } from '../reviewer.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-addreviewer',
  templateUrl: './addreviewer.component.html',
  styleUrls: ['./addreviewer.component.scss']
})
export class AddreviewerComponent implements OnInit {

  addReviewewForm: FormGroup;
  submitted = false;
  hideProject: boolean = false;

  constructor(private formBuilder: FormBuilder ,
              private projectService:ProjectService ,
              private adminService:AdminService) { }

  ngOnInit() {
    this.projectService.getProjects();

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
    this.insertReviewerRecord(this.addReviewewForm.value as Reviewer);
  }

  isReviewer() {

    var res = this.f.IsReviewer.value;
    if (res == true) {
      this.hideProject = false;
      //role=1;
    }
    else {
      this.hideProject = true;
      //role=3;
    }
  }


  insertReviewerRecord(data:Reviewer) {
    console.log(this.addReviewewForm.value,"Value is above");
    this.adminService.postReviewer(data).subscribe(
      res=>{
        this.submitted = false;
        this.hideProject = false;
        this.addReviewewForm.reset();
      },
      err=>{
        console.log(err);
      }
    )  
   
   }

}