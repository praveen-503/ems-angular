import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingManagerService } from '../billing-manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/shared/models/project.model';
@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {
  projectForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private billingmanagerservice: BillingManagerService,
    private toastr: ToastrService,
    private route: Router
   ) { }
  ngOnInit() {
    this.billingmanagerservice.getClient();
    this.projectForm = this.formBuilder.group(
      {
        ClientId: ['', Validators.required],
        Name: ['', Validators.required]
      }
    )
  }
  get f() {
    return this.projectForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.projectForm.invalid) {
      console.log(this.projectForm.value);
      return;
    }
    this.AddProject(this.projectForm.value as Project);
  }
  onReset() {
    this.projectForm.reset();
  }
  AddProject(form:Project) {
    console.log(this.projectForm.value + "start");
    this.billingmanagerservice.postProject(form).subscribe(
      res => {
        console.log(this.projectForm.value + "res");
        if (res.status == 201) {
          this.toastr.success('Added Successfully', 'project')
          this.route.navigate(['/billing-manager']);
        }
        console.log(res);
        this.projectForm.reset();
      },
      err => {
        console.log(err);
      }
    )
  }
}


