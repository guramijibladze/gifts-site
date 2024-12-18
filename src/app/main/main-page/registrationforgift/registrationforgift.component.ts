import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../model';

@Component({
  selector: 'app-registrationforgift',
  templateUrl: './registrationforgift.component.html',
  styleUrl: './registrationforgift.component.scss'
})
export class RegistrationforgiftComponent {
  @Output() modalClose = new EventEmitter<boolean>();

  user:User = {
    name: '',
    lastName: '',
    phoneNumber: ''
  }

  closeModal(){
    this.modalClose.emit()  
  }

  public registation(){
    console.log(this.user)
  }
}
