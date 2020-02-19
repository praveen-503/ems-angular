import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      EmpID: ['', Validators.required,],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]

    },
    {
      validator: MustMatch('Password', 'ConfirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // this.empService.onPostemployee(this.registerForm.value as Employee)
    //   .subscribe(data => {
    //     if (data.Status == 'Error') {
    //       this.toaster.error(data.Message, 'User Details');
    //     }
    //     else {
    //       this.toaster.success(data.Message, 'Employee Details');
    //       this.router.navigate(['/login']);
    //     }
    //   }, err => {
    //     console.log(err)
    //   })
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
  
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
