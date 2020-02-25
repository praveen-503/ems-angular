import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validator';
import { RegistrationService } from './registration.service';
import { Employee } from 'src/app/shared/models/employee.model';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private regService: RegistrationService,
    private projectService: ProjectService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.projectService.getProjects();


    this.registerForm = this.formBuilder.group({
      EmployeeId: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
      ProjectId: ['', Validators.required],
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
    if (this.registerForm.invalid) {
      return;
    }
    var empdata = this.registerForm.value;
    var employee = new Employee();
    employee.EmployeeId = empdata.EmployeeId;
    employee.Name = empdata.FirstName + ' ' + empdata.LastName;
    employee.Password = empdata.Password;
    employee.ProjectId = Number(empdata.ProjectId);
    
    
    this.regService.postEmployee(employee)
      .subscribe(res => {
        if (res.status == 200) {
          this.toastr.success('Registerd Successfully', 'Employee ' + res.body.employeeId)
          this.router.navigate(['/enroll/login']);
        }
        else {
          console.log(res);
        }
      },
        err => { console.log(err) })

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
