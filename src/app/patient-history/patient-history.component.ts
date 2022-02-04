import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';


@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {

  constructor(private _router: Router) { }
  navigateToPatientsComponent() {
    this._router.navigate(['PatientsComponent'])
  }
   
  onClick(){}

  
}
