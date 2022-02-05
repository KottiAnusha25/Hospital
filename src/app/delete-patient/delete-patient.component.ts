import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class DeletePatientComponent{
  

  constructor(private _router: Router, private route: ActivatedRoute, private patientService: PatientServiceService) { }
  model : Patient = {};
  id: any;
  ngOnInit() {
    let tempJsonObj: any = this.route
      .snapshot.queryParams;
      this.model = JSON.parse(tempJsonObj.patientObj);
      this.id = this.model.id
  }
  navigateToPatientsComponent() {
    this._router.navigate(['PatientsComponent'])
  }
  confirmDelete() {
    this.patientService.delete(this.model.id).subscribe();
  }
  
  
      }
