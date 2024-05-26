import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppHomeComponent } from './app-home/app-home.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DateRangePickerComponent } from './common/date-range-picker/date-range-picker.component';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: AppHomeComponent
  },
  {
    path: 'transaction',
    component: TransactionPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    TransactionPageComponent,
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
