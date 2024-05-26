import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: AppHomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    importProvidersFrom(BrowserModule)
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
