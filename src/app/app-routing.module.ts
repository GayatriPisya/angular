import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginButtonFunctionComponent } from './login-button-function/login-button-function.component';
// import { NumberCheckComponent } from './number-check/number-check.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { BasicArithmeticOperationsComponent } from './basic-arithmetic-operations/basic-arithmetic-operations.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'operations', component: BasicArithmeticOperationsComponent },
  // { path: 'login', component: LoginButtonFunctionComponent },
  // { path: 'number', component: NumberCheckComponent },
  // { path: 'student', component: StudentDetailsComponent },
  // { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
