import { Injectable } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewUserStoryService {

  isFormEmpty:boolean=false;

  constructor( ) { }

}
