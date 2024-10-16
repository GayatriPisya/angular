import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonFunctionComponent } from './login-button-function/login-button-function.component';
import { NumberCheckComponent } from './number-check/number-check.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonFunctionComponent,
    NumberCheckComponent
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
