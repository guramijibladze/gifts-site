import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registrationforgift',
  templateUrl: './registrationforgift.component.html',
  styleUrl: './registrationforgift.component.scss'
})
export class RegistrationforgiftComponent {
  @Output() modalClose = new EventEmitter<boolean>();

  closeModal(){
    this.modalClose.emit()  
  }
}
