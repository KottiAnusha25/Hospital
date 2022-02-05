import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPatient } from './add-patient/AddPatient';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
    private url="http://localhost:3000/PatientsData/";
    // private _url="http://localhost:3000/History/";
    
  constructor(private http:HttpClient) { }
  
  getPatientsData(){
    return this.http.get(this.url);
  }
  push(user:Patient){
    return this.http.post(this.url,user)
  } 

  delete(id:any){
    return this.http.delete(`${this.url}/${id}`);
  } 
  
  getHistory(){
    return this.http.get('/assets/');
  }

}
