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

  public closeModal(){
    this.modalClose.emit()  
  }

  public registation(){
    if(this.user.phoneNumber.length != 9){
      console.log('გთხოვთ შეიყვანეთ სწორი ტელეფონის ნომერი!!!')
      return
    }
    console.log(this.user)
  }
}
