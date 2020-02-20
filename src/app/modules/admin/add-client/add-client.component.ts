import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  addClientForm: FormGroup;

  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addClientForm = this.formBuilder.group(
      {
        clientName: ['']
      }
    )}

  get f() {
    return this.addClientForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addClientForm.invalid) {
      console.log(this.addClientForm.value);
      return;
    }
    console.log(this.addClientForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addClientForm.value));
    this.addClientForm.reset();
  }
}










