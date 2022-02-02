import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital';
  constructor(private _router: Router) { }
  navigateToPatientsComponent() {
    this._router.navigate(['PatientsComponent'])
  }
}
