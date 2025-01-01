import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model';
import { PresendetgiftsService } from '../../service/presendetgifts.service';
import { GrowlService } from '../../service/growl.service';

@Component({
  selector: 'app-registrationforgift',
  templateUrl: './registrationforgift.component.html',
  styleUrl: './registrationforgift.component.scss'
})
export class RegistrationforgiftComponent {
  @Output() modalClose = new EventEmitter<number>();
  @Input() Id!:number;

  //validation 
  public textValidationName:boolean = false;
  public textValidationLAstName:boolean = false;
  public textValidatioPhoneNumber:boolean = false;

  //error text
  public readonly errorText:string = 'გთხოვთ შეიყვანოთ მხოლოდ ასოები!';
  public readonly phoneErrorText:string = 'გთხოვთ შეიყვანოთ სწორი მობილურის ნომერი!';

  //sms validation modal
  public smsValidationModal:boolean = false

  private readonly regex = /^[ა-ჰa-zA-Z]+$/;
  private readonly regexForPhoneNumber = /^\d+$/;

  private smsCode!:string

  constructor(
    private presendetgiftsService: PresendetgiftsService,
    private growlService:GrowlService
  ){}

  ngOnInit() { }

  user:User = {
    giftItemId: 0,
    firstname: '',
    lastname: '',
    phoneNumber: '',
    smsCode: ''
  }

  public openModal(){
    this.smsValidationModal = true;
  
  }

  public closeModal(){
    this.modalClose.emit() 
  }

  public smsModalClose(smsCode:string){
    this.smsValidationModal = false;
    smsCode ? this.smsCode = smsCode : '';
    smsCode ? this.registation() : '';
  }

  public registation(){

    if(!this.validationGet(this.user)){
      return
    }
    
    this.user.giftItemId = this.Id;
    this.user.smsCode = this.smsCode;

    // console.log(this.user)
    this.presendetgiftsService.giftRegistration(this.user).subscribe({
      next: (res:any) => {
        this.smsValidationModal = true
        let successMessage = 'თქვენ მონაწილეობთ გაჩუქებაში';
        this.growlService.showSuccessAnimation(successMessage);
        this.closeModal();
      },
      error:(error:any) => {
        console.log(error)
        let errorMesage = error.error.text;
        this.growlService.showErrorAnimation(errorMesage);
      }
    })
    
  }

  public updateField(inputValueStr:string){

    if(inputValueStr == 'firstname'){
      this.textValidationName = false
    }else if(inputValueStr == 'lastname'){
      this.textValidationLAstName = false
    }else{
      this.textValidatioPhoneNumber = false
    }
    
  }


  //validation cheker
  private validationGet(user:User):boolean{

    if(!this.regex.test(user.firstname)){
      this.textValidationName = true
    }else{
      this.textValidationName = false
    }

    if(!this.regex.test(user.lastname)){
      this.textValidationLAstName = true
    }else{
      this.textValidationLAstName = false
    }

    if(this.user.phoneNumber.length != 9 || !this.regexForPhoneNumber.test(user.phoneNumber)){
      this.textValidatioPhoneNumber = true
    }else{
      this.textValidatioPhoneNumber = false
    }

    if(this.textValidationName || this.textValidationLAstName || this.textValidatioPhoneNumber){
      return false
    }else{
      return true
    }
  }

}
