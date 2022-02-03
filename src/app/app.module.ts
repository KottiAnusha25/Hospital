import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponentComponent} from './patients-component/patients-component.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { AgGridModule } from 'ag-grid-angular';
import { MyActionsRenderer } from './shared/MyActionsRenderer';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    PatientsComponentComponent,
    AddPatientComponent,
    EditPatientComponent,
    PatientHistoryComponent,
    MyActionsRenderer,
    DeletePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MyActionsRenderer]
})
export class AppModule { }
