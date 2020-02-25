import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-billingmanager',
  templateUrl: './add-billingmanager.component.html',
  styleUrls: ['./add-billingmanager.component.scss']
})
export class AddBillingmanagerComponent implements OnInit {
  addBillingManagerForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

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
    this.insertRecord();
  }

  myFunction() {

    var res = this.f.IsBillingManager.value;
    if (res == true) {
      console.log("Now He/She is billing-manager");
      // this.hourHide = false;
    }
    else {
      console.log("Now He/She is not a billing-manager");

      // this.hourHide = true;
    }
  }


  insertRecord() {
    console.log(this.addBillingManagerForm.value,"Value is above");
   
        this.submitted = false;
        // this.hourHide = false;
        this.addBillingManagerForm.reset();
  }

}
