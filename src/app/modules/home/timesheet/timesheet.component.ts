import { Component, OnInit } from '@angular/core';
import { NewUserStoryService } from '../new-user-story/new-user-story.service';
import { NewUserStoryComponent } from '../new-user-story/new-user-story.component';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor(private _userService:NewUserStoryService) { }

  ngOnInit() {
  }



}
