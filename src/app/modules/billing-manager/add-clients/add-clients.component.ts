import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingManagerService } from '../billing-manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { Project } from 'src/app/shared/models/project.model';
@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {
  clientForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private billingmanagerservice: BillingManagerService,
    private toastr: ToastrService,
    private route: Router) { }
  ngOnInit() {
    this.clientForm = this.formBuilder.group(
      { Name: [''], })
  }
  onSubmit() {
    this.submitted = true;
    if (this.clientForm.invalid) {
      console.log(this.clientForm.value);
      return;
    }
    this.AddClient(this.clientForm.value as Client);
  }
  onReset() {
    this.clientForm.reset();
  }
  AddClient(form: Client) {
    this.billingmanagerservice.postClient(form).subscribe(
      res => {
        if (res.status == 201) {
          this.toastr.success('Added Successfully', 'client')
          this.billingmanagerservice.getClient();
          this.route.navigate(['/billing-manager']);
        }
        console.log(res);
        this.clientForm.reset();
      },
      err => {
        console.log(err);
      }
    )
  }
}
