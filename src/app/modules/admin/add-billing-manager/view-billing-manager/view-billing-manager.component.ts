import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-view-billing-manager',
  templateUrl: './view-billing-manager.component.html',
  styleUrls: ['./view-billing-manager.component.scss']
})
export class ViewBillingManagerComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getBillingManager();
  }
  
}
