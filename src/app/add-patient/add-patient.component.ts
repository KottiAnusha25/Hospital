import { Component} from '@angular/core';
import { Patient } from '../patient';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent  {
      userModel= new Patient();
      
    
}
