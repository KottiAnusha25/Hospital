import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponentComponent} from './patients-component/patients-component.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { AgGridModule } from 'ag-grid-angular';
import { MyActionsRenderer } from './shared/MyActionsRenderer';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import {HttpClientModule} from '@angular/common/http';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponentComponent,
    AddPatientComponent,
    EditPatientComponent,
    PatientHistoryComponent,
    MyActionsRenderer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule ,
    ConfirmDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
  entryComponents:[MyActionsRenderer]
})
export class AppModule { }
