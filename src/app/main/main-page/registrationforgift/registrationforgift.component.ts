import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model';
import { PresendetgiftsService } from '../../service/presendetgifts.service';

@Component({
  selector: 'app-registrationforgift',
  templateUrl: './registrationforgift.component.html',
  styleUrl: './registrationforgift.component.scss'
})
export class RegistrationforgiftComponent {
  @Output() modalClose = new EventEmitter<number>();
  @Input() Id!:number;

  constructor(
    private presendetgiftsService: PresendetgiftsService,
  ){}

  ngOnInit() { }

  user:User = {
    giftItemId: 0,
    firstname: '',
    lastname: '',
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

    this.user.giftItemId = this.Id

    this.presendetgiftsService.giftRegistration(this.user).subscribe({
      next: (res:any) => {},
      // complete:(res:any) => {},
      // error:(error:any) => {}
    })
    
  }

}
