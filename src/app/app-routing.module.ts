import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginButtonFunctionComponent } from './login-button-function/login-button-function.component';
import { NumberCheckComponent } from './number-check/number-check.component';

const routes: Routes = [
  { path: 'login', component: LoginButtonFunctionComponent },
  { path: 'number', component: NumberCheckComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
