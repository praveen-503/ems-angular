import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingManagerService } from '../billing-manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {

  addForm: FormGroup;

  submitted = false;
  //public codeValue: string;



  constructor(private formBuilder: FormBuilder, 
    private billingmanagerservice: BillingManagerService,
    private toastr:ToastrService,
    private route:Router) { }

  ngOnInit() {
  this.billingmanagerservice.getClient();
    this.addForm = this.formBuilder.group(
      {

        Projectname: ['', Validators.required],
        Name:[]
      }
    )
  }
  // clientList(){
  //   this.billingmanagerservice.getClient();
  // }

 clientList=[
   this.billingmanagerservice.getClient().toPromise()
   .then(data =>(this.billingmanagerservice.clientlist = data as Client[]))
 ]
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

  AddProject() {
  
    console.log(this.addForm.value+"start");

    this.billingmanagerservice.postProject(this.addForm.value).subscribe(
      res => {
        console.log(this.addForm.value+"res");
        if(res.status==200){
          this.toastr.success('Added Successfully', 'client' )
          this.route.navigate(['/billing-manager']);
      }
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


