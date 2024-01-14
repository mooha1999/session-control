import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { UsersComponent } from './pages/users/users.component';
import { MaterialModule } from './modules/material.module';
import { FilterComponent } from './pages/hospitals/components/filter/filter.component';
import { TableComponent } from './pages/hospitals/components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InputFieldComponent,
    HospitalsComponent,
    UsersComponent,
    FilterComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
