
import { Component} from '@angular/core';
import { Edit } from '../edit';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent  {
      model= new Edit();

}
