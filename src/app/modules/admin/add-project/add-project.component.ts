import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  addForm:FormGroup;

  submitted=false;
  public codeValue: string;

  clientList = [
    { Id: 1, Name: 'SEDC' },
    { Id: 2, Name: 'angular' },
    { Id: 3, Name: 'Angular 5' },
    { Id: 4, Name: 'Angular 6' },
    { Id: 5, Name: 'Angular 7' }
  ];

  // public saveCode(e): void {
  //   let name = e.target.value;
  //   let list = this.clientList.filter(x => x.name === name)[0];
  //   console.log(list.id);
  // }

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
   this.addForm=this.formBuilder.group(
     {
      projectname:['',Validators.required],
      addclient:['']
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
    this.submitted=false;

    this.addForm.reset();
  }
  onReset(){
    this.addForm.reset();
  }

}