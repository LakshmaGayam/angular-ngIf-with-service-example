import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetaailsComponent } from './employee-detaails/employee-detaails.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeListComponent, EmployeeDetaailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
