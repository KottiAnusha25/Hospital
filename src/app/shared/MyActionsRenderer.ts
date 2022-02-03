import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ICellRendererParams } from "ag-grid-community";


@Component({
    selector: 'all-actions-component',
    template: `
         <span style ="padding:10px">
           <button type="button"  (click)="navigateToEditPatient()"> <i class='fas fa-pencil-alt' ></i></button>
         </span>

         <span style ="padding:10px">
            <button type="button"  (click)="navigateToDeletePatient()"><i class='fas fa-trash-alt'></i></button>
         </span>

         <span style ="padding:10px">
            <button type="button"  (click)="navigateToPatientHistory()"><i class='fa fa-user-md'></i></button>
         </span>
   `

})
export class MyActionsRenderer {
    private cellValue: string = '';

    agInit(params: ICellRendererParams): void {
        this.cellValue = this.getValuesForRoute(params);
    }

    refresh(params: ICellRendererParams) {
        this.cellValue = this.getValuesForRoute(params);
    }

    edit() {
        alert(`Route to edit  ${this.cellValue}`)
    }

    delete() {
        alert(`Route to delete  ${this.cellValue}`)
    }

    patientHistory() {
        alert(`Route to PatientHistory  ${this.cellValue}`)
    }
    getValuesForRoute(params: ICellRendererParams) {
        return params.data.Name;
    }

    constructor(private _router: Router) { }
    navigateToEditPatient() {
        this._router.navigate(['EditPatient'])
    }
    navigateToPatientHistory() {
        this._router.navigate(['PatientHistory'])
    }
    navigateToDeletePatient() {
        this._router.navigate(['DeletePatient'])
    }
   

}
