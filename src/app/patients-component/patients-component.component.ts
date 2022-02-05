import { Component, OnInit } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import { MyActionsRenderer } from '../shared/MyActionsRenderer';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patients-component',
  templateUrl: './patients-component.component.html',
  styleUrls: ['./patients-component.component.css']
})
export class PatientsComponentComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'age' },
    { field: 'gender' },
    { field: 'CheckInDate' },
    {
      headerName: "Action", field: "action",
      cellRenderer: 'allActionsRenderer'
    }
  ];

  frameworkComponents = {
    allActionsRenderer: MyActionsRenderer,
  };
  rowData: any = [
  ];
  constructor(private _router: Router, private patientService: PatientServiceService) { }
  ngOnInit(): void {
    this.patientService.getPatientsData().subscribe((data :any) => {
        this.rowData = [...data];
    });
  }

  navigateToAddPatient() {
    this._router.navigate(['AddPatient'])
  }

  edit(params: ICellRendererParams) {
  }
  onClick() {

  }
}
