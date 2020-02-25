import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingManagerService } from '../billing-manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {
  addClient: FormGroup;
  submitted = false;
  //public codeValue: string;

 


  constructor(private formBuilder: FormBuilder, 
    private billingmanagerservice: BillingManagerService,
     private toastr:ToastrService,
     private route:Router) { }

  ngOnInit() {
    this.addClient = this.formBuilder.group(
      {Name: [''],})
  }
  
  onSubmit() {
    console.log('Error checking');
    this.toastr.success('Added Successfully', 'client' )
    return
    this.submitted = true;
    if (this.addClient.invalid) {
      console.log(this.addClient.value);
      return;
    }
    this.AddClient(this.addClient.value as Client);
  }
  onReset() {
    this.addClient.reset();
  }

  AddClient(form:Client) {
    
// console.log(this.addClient.value);
    this.billingmanagerservice.postClient(form).subscribe(
      res => {
        if(res.status==200){
          this.toastr.success('Added Successfully', 'client' )
          this.route.navigate(['/billing-manager']);
        }
        console.log(res);
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form));
        this.addClient.reset();
      },
      err => {
        console.log(err);
      }
    )
  }
  

}
