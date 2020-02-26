import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { BillingManager } from '../billing-manager.model';

@Component({
  selector: 'app-add-billingmanager',
  templateUrl: './add-billingmanager.component.html',
  styleUrls: ['./add-billingmanager.component.scss']
})
export class AddBillingmanagerComponent implements OnInit {
  addBillingManagerForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,
              private adminService:AdminService) { }

  ngOnInit() {
    this.addBillingManagerForm=this.formBuilder.group({
      EmployeeId:0,
      Name:[''],
      IsBillingManager:false,

    });
  }

  get f() {
    return this.addBillingManagerForm.controls;
  }

 onSubmit() {
    this.submitted = true;
    
    if (this.addBillingManagerForm.invalid) {
      console.log("error in form");

      return;
    }
    console.log(this.addBillingManagerForm.value);
    this.insertBillingManagerRecord(this.addBillingManagerForm.value as BillingManager);
  }

  isBillingManager() {
    var res = this.f.IsBillingManager.value;
    if (res == false) {
      console.log("Now He/She is billing-manager");
      //role=2;
    }
    else {
      console.log("Now He/She is not a billing-manager");
      //role=1;
    }
  }

  insertBillingManagerRecord(data:BillingManager) {
    console.log(this.addBillingManagerForm.value,"Value is above");
    this.adminService.postBillingManager(data).subscribe(
      res=>{
        this.submitted = false;
        this.addBillingManagerForm.reset();
      },
      err=>{
        console.log(err);
      }
    )
        
  }

}
