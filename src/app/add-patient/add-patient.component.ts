import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';
import { AddPatient } from './AddPatient';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent  {
      patient= new Patient();
      constructor(private router: Router, private patientService: PatientServiceService) { }
     
   
      onSubmit(){
        this.patientService.enroll(this.patient)
         .subscribe(
           data=> {
             if(!!data) {
                this.router.navigate(['PatientsComponent']);
             }
           }
          
         )
      }
        
      
}
