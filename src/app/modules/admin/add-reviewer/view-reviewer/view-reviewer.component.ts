import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-view-reviewer',
  templateUrl: './view-reviewer.component.html',
  styleUrls: ['./view-reviewer.component.scss']
})
export class ViewReviewerComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
   this.adminService.getReviewer();
  }
}