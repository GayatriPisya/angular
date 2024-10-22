import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
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
import { CheckfunctionComponent } from './checkfunction/checkfunction.component';
import { ToggleTextComponent } from './toggle-text/toggle-text.component';
import { MyComponent } from './my-component/my-component.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicArithmeticOperationsComponent } from './basic-arithmetic-operations/basic-arithmetic-operations.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { SignalExampleComponent } from './signal-example/signal-example.component';
import { HomeComponent } from './home/home.component';

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
    CustomerDetailsComponent,
    CheckfunctionComponent,
    ToggleTextComponent,
    MyComponent,
    MenuCardComponent,
    ViewChildComponent,
    NavbarComponent,
    BasicArithmeticOperationsComponent,
    CourseCardComponent,
    SignalExampleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
