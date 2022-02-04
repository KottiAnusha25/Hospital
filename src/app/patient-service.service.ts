import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPatient } from './add-patient/AddPatient';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
    private url="http://localhost:3000/PatientsData/";
  constructor(private http:HttpClient) { }
  getPatientsData(){
    return this.http.get(this.url);
  }
  enroll(user:Patient){
    return this.http.post(this.url,user)
  }

  

}
