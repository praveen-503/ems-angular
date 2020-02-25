import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assiging-role',
  templateUrl: './assiging-role.component.html',
  styleUrls: ['./assiging-role.component.scss']
})
export class AssigingRoleComponent implements OnInit {
  addForm:FormGroup;
  
  submitted=false;
  public codeValue: string;

  idList = [
    { Id: 1, Name: 'jyothi' },
    { Id: 2, Name: 'chandana' },
    { Id: 3, Name: 'nandana' },
    { Id: 4, Name: 'anjali' },
    { Id: 5, Name: 'asha' },
    { Id: 6, Name: 'monica' },

  ];
  roleList = [
    { Id: 1, Name: 'hr' },
    { Id: 2, Name: 'billing-manager' },
    { Id: 3, Name: 'team-leader' },
    { Id: 4, Name: 'manager' },
    { Id: 5, Name: 'employee' },
    
  ];




  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
   this.addForm=this.formBuilder.group(
     {
      empId:[''],
      empName:[''],
      projectname:[''],
      roles:[''],

 
     }
   )
    
  
  }
  get f() {
    return this.addForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.addForm.invalid){
      console.log(this.addForm.value);
      return;
    }
   
    console.log(this.addForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addForm.value));
    this.addForm.reset();
  }
  onReset(){
    this.addForm.reset();
  }

}
