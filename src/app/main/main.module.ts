import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ShellModule } from '../shell/shell.module';
import { RouterModule, Routes } from '@angular/router';
import { PresendetgiftsService } from './service/presendetgifts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrationforgiftComponent } from './main-page/registrationforgift/registrationforgift.component';
import { FormsModule } from '@angular/forms';
import { SmsRegistrationComponent } from './main-page/registrationforgift/sms-registration/sms-registration.component';

const routes: Routes = [
  { path: '', component: MainPageComponent}
]

@NgModule({
  declarations: [
    MainPageComponent,
    RegistrationforgiftComponent,
    SmsRegistrationComponent
  ],
  imports: [
    CommonModule,
    ShellModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    PresendetgiftsService,
    HttpClientModule,
    HttpClient,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MainModule {
  constructor(){
    console.log('load')
  }
 }
