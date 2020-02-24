import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss']
})
export class ViewEmployeesComponent implements OnInit {
  elements: any = [
    {EmployeeID: 12345, Month: 'May', Totalhours:170, Totalhour_less_than_8_hours: 5},
    {EmployeeID: 23456, Month: 'Jul', Totalhours:170, Totalhour_less_than_8_hours: 4},
    {EmployeeID: 34567, Month: 'Feb', Totalhours:170, Totalhour_less_than_8_hours: 6},
    {EmployeeID: 12345, Month: 'May', Totalhours:170, Totalhour_less_than_8_hours: 5},
    {EmployeeID: 12345, Month: 'Mar', Totalhours:170, Totalhour_less_than_8_hours: 3},
    {EmployeeID: 12345, Month: 'Nov', Totalhours:170, Totalhour_less_than_8_hours: 3},
    {EmployeeID: 12345, Month: 'Jan', Totalhours:170, Totalhour_less_than_8_hours: 5},
    {EmployeeID: 12345, Month: 'Feb', Totalhours:170, Totalhour_less_than_8_hours: 5},
    {EmployeeID: 12345, Month: 'Dec', Totalhours:170, Totalhour_less_than_8_hours: 6},

  ];

  headElements = ['EmployeeID', 'Month', 'Totalhours', 'Totalhour_less_than_8_hours'];
  constructor() { }

  ngOnInit() {
  }

}