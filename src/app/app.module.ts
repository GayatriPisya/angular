import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonFunctionComponent } from './login-button-function/login-button-function.component';
import { NumberCheckComponent } from './number-check/number-check.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonFunctionComponent,
    NumberCheckComponent,
    StudentDetailsComponent,
    ParentComponent,
    ChildComponent,
    StudentListComponent,
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
