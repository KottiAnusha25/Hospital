import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-patients-component',
  templateUrl: './patients-component.component.html',
  styleUrls: ['./patients-component.component.css']
})
export class PatientsComponentComponent implements OnInit {
  columnDefs: ColDef[] = [];

rowData = [];
   
  constructor() { }

  ngOnInit(): void {
  }

}
