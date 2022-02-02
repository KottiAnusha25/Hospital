import { Component } from "@angular/core";
import { ICellRendererParams } from "ag-grid-community";


@Component({
    selector: 'all-actions-component',
    template: `
         <span style ="padding:10px">
           <button (click)="edit()">  <i class='fas fa-pencil-alt' ></i></button>
         </span>
         <span style ="padding:10px">
         <button  (click)="delete()"><i class='fas fa-trash-alt'></i></button>
     </span>
     <span style ="padding:10px">
     <button (click)="openHistory()"><i class="fa fa-user-md" ></i></button>
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

    openHistory() {
        alert(`Route to History  ${this.cellValue}`)
    }
    getValuesForRoute(params: ICellRendererParams) {
        return params.data.Name;
    }
}