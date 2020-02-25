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



  constructor(private formBuilder: FormBuilder, private billingmanagerservice: BillingManagerService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {

        Projectname: ['', Validators.required],
        
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
    this.AddProject();

  }
  onReset() {
    this.addForm.reset();
  }

  AddProject(){
    this.billingmanagerservice.postProject(this.addForm).subscribe(
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
