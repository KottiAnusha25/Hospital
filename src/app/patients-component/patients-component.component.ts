import { Component } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import { MyActionsRenderer } from '../shared/MyActionsRenderer';




@Component({
  selector: 'app-patients-component',
  templateUrl: './patients-component.component.html',
  styleUrls: ['./patients-component.component.css']
})
export class PatientsComponentComponent {

  columnDefs: ColDef[] = [
    { field: 'Name' },
    { field: 'Age' },
    { field: 'Sex' },
    { field: 'CheckIn' },
    {
      headerName: "Action", field: "action",
      cellRenderer: 'allActionsRenderer'
    }
  ];

  frameworkComponents = {
    allActionsRenderer: MyActionsRenderer,
  };
  rowData = [
    { Name: 'Patient1', Age: 34, Sex: 'Male', CheckIn: '01/05/2021' },
    { Name: 'Patient2', Age: 44, Sex: 'Male', CheckIn: '01/05/2021' },
    { Name: 'Patient3', Age: 56, Sex: 'Male', CheckIn: '01/05/2021' },
    { Name: 'Patient4', Age: 75, Sex: 'Male', CheckIn: '01/05/2021' },
    { Name: 'Patient5', Age: 58, Sex: 'Male', CheckIn: '01/05/2021' }
  ];
  constructor(private _router: Router) { }
  navigateToAddPatient() {
    this._router.navigate(['AddPatient'])
  }

  edit(params: ICellRendererParams) {
    console.log('Params', params);
  }
  onClick() {

  }
}
