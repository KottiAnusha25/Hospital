import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPatientComponent} from './add-patient/add-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import{EditPatientComponent} from './edit-patient/edit-patient.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { PatientsComponentComponent } from './patients-component/patients-component.component';

const routes: Routes = [
  {path:'PatientsComponent',component:PatientsComponentComponent},
  {path:'PatientsComponent/:Name',component:PatientsComponentComponent},
  {path:'PatientHistory',component:PatientHistoryComponent},
  {path:'AddPatient',component:AddPatientComponent},
  {path:'EditPatient', component:EditPatientComponent},
  {path:'DeletePatient',component:DeletePatientComponent},
  {path:'', redirectTo:'/PatientsComponent', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
