import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDate, NgbDatepickerModule, NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  model!: NgbDate;
  minDate: NgbDate;
  maxDate: NgbDate;

  constructor() {
    // Set a minimum date (e.g., 1900-01-01) and a maximum date (e.g., 2099-12-31)
    this.minDate = new NgbDate(1900, 1, 1);  // You can set the year range as required
    this.maxDate = new NgbDate(3099, 12, 31); // Same here for the upper limit
  }

}
