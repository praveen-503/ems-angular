import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
      private router: Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        EmpID: ['',Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
          Password: ['', Validators.required],
          acceptTerms: [false]
      });
  } 
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      // this.authService.login(this.loginForm.value)
      //     .subscribe(data => {
      //         if (data.Status == 'Error') {
      //             this.toaster.error(data.Message, 'User Details');
      //         }
      //         else {
      //             this.toaster.success(data.Message, 'User Details');
      //             this.router.navigate(['/']);
                  
      //         }
      //         // display form values on success
      //         // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
      //     })
  }
  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }
}
