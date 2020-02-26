import { Component, OnInit } from '@angular/core';
import { BillingManagerService } from '../billing-manager.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
addproject;
  constructor(private service:BillingManagerService) { }

  ngOnInit() {
  
  }
}
