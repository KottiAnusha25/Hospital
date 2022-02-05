import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ICellRendererParams } from "ag-grid-community";
import { Patient } from "../patient";
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';


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
         <p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle"></p-confirmDialog>
   `,
   providers: [ConfirmationService,MessageService]

})
export class MyActionsRenderer {
    private cellValue: string = '';
    private patientObject: Patient = {};
    constructor(private _router: Router,  private confirmationService: ConfirmationService, private messageService: MessageService) { }

    agInit(params: ICellRendererParams): void {
        this.cellValue = this.getValuesForRoute(params);
        this.patientObject = this.getPatientObject(params);
        console.log("POBJ : ", this.patientObject);
    }

    refresh(params: ICellRendererParams) {
        this.cellValue = this.getValuesForRoute(params);
        this.patientObject = this.getPatientObject(params);
    }

    edit() {
        alert(`Route to edit  ${this.cellValue}`)
    }

    delete() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
        }
    });
 }

    patientHistory() {
        alert(`Route to PatientHistory  ${this.cellValue}`)
    }
    getValuesForRoute(params: ICellRendererParams) {
        return params.data.Name;
    }

    getPatientObject(params: ICellRendererParams) {
        let tempPatient: Patient = {
            id: params.data.id,
            name:params.data.Name,
            CheckInDate: params.data.CheckInDate,
            age: params.data.Age,
            gender: params.data.Gender
        }
        return tempPatient;
    }

    navigateToEditPatient() {
        this._router.navigate(['EditPatient'],  { queryParams: { patientObj:  JSON.stringify(this.patientObject) }});
    }
    navigateToPatientHistory() {
        this._router.navigate(['PatientHistory'])
    }
    navigateToDeletePatient() {
        this._router.navigate(['DeletePatient',  { queryParams: { patientObj:  JSON.stringify(this.patientObject) }}])
    }
   

}
