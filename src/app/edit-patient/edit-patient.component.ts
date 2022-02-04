
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Edit } from '../edit';
import { Patient } from '../patient';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent  {
      patientName$: Observable<string> | undefined;
      model : Patient = {};
      constructor(
        private route: ActivatedRoute,
        private router: Router) {}
    
      ngOnInit() {
        let tempJsonObj: any = this.route
          .snapshot.queryParams;
          console.log('this.tempJsonObj : ',tempJsonObj);
          this.model = JSON.parse(tempJsonObj.patientObj);
          console.log('this.moddel : ',this.model);
      }
    
      ngOnDestroy() {
      }
      onSubmit(){
        
      }
}
