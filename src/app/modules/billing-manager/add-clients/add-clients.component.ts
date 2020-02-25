import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingManagerService } from '../billing-manager.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {


 
  addClient: FormGroup;

  submitted = false;
  //public codeValue: string;

 


  constructor(private formBuilder: FormBuilder, private billingmanagerservice: BillingManagerService) { }

  ngOnInit() {
    this.addClient = this.formBuilder.group(
      {
        Name: [''],
       
      }
    )


  }
  
  onSubmit() {
    this.submitted = true;
    if (this.addClient.invalid) {
      console.log(this.addClient.value);
      return;
    }
    this.AddClient();

  }
  onReset() {
    this.addClient.reset();
  }

  AddClient() {
alert('data alert');
console.log(this.addClient.value);
    this.billingmanagerservice.postClient(this.addClient.value).subscribe(
      res => {
        if(res.status==201){
          
        }
        console.log(res);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addClient.value));
        this.addClient.reset();
      },
      err => {
        console.log(err);
      }
    )
  }
  

}
