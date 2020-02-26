import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Credentials } from 'src/app/shared/models/credentials.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      EmployeeId: ['', Validators.required],
      saveCredentials:[false]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.forgotpasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.forgotpasswordForm.invalid) {
      return;
    }
    var credentials = new Credentials();
    credentials.EmployeeId = Number(this.forgotpasswordForm.value.EmployeeId);
    credentials.Password =this.forgotpasswordForm.value.Password;
    this.authService.login(credentials as Credentials)
      .subscribe(res => {
        if (res.status == 200) {
          this.toastr.success('Successfully', 'Login');
          this.router.navigate(['/']);
        }
        else {
          this.toastr.error(res.status.toString(), 'Login');
        }

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotpasswordForm.value, null, 4));
      },
        err => {
          this.toastr.error('Error Code:'+err.status.toString(), 'Invalid Credentials');
          console.log(err)
        }
      )
  }
  onReset() {
    this.submitted = false;
    this.forgotpasswordForm.reset();
  }
}
