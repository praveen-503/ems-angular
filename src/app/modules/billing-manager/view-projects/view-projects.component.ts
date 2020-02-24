import { Component, OnInit } from '@angular/core';
import { BmserviceService } from '../bmservice.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
addproject;
  constructor(private service:BmserviceService) { }

  ngOnInit() {
   // this.service.get();
  }
  billingForm()
  {
    // this.service.FormData=Object.assign({},bm);
  }
}
