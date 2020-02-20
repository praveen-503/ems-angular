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
  projectList = [
    { Id: 1, Name: 'Angular 2+' },
    { Id: 2, Name: 'Angular 4' },
    { Id: 3, Name: 'Angular 5' },
    { Id: 4, Name: 'Angular 6' },
    { Id: 5, Name: 'Angular 7' }
  ];
  constructor(private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

//     var des = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
// Object.defineProperty(HTMLInputElement.prototype, 'value', { get: function() {
//   if(this.type === 'text' && this.list) {
//     var value = des.get.call(this);
//     var opt = [].find.call(this.list.options, function(option) {
//       return option.value === value; 
//     });
//     return opt ? opt.dataset.value : value;
//   }
// }});
    this.registerForm = this.formBuilder.group({
      EmpID: ['', Validators.required,],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
      Project: ['', Validators.required],
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
      console.log(this.registerForm.value);
      return;
    }

    console.log(this.registerForm.value);
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
