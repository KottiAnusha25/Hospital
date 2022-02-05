import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {Router } from '@angular/router';
import { PatientHistory } from './PatientHistory';
import { PatientServiceService } from '../patient-service.service';


@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
  history : PatientHistory = {}
  constructor(private _router: Router,private fb: FormBuilder,
    private http: HttpClient, _patientService: PatientServiceService) {
      
     }
  
    navigateToPatientsComponent() {
    this._router.navigate(['PatientsComponent'])
  }
  ngOnInit(): void {
    
      this.http.get('assets/data.json/').subscribe((data :any) => {
    });
  }
  onClick(){}
}
