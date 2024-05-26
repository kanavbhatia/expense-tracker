import {Component} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {JsonPipe} from '@angular/common';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.css',
})
export class DateRangePickerComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
