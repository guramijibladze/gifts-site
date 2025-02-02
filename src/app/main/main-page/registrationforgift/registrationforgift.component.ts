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
  @Output() modalClose = new EventEmitter<string>();
  @Input() Id!:number;

  //timer
  smsTimer!:ReturnType<typeof setInterval>

  //validation 
  public textValidationName:boolean = false;
  public textValidationLAstName:boolean = false;
  public textValidatioPhoneNumber:boolean = false;

  public smsInputValue:boolean = false;

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

  public registrationStart():void{
    if(!this.validationGet(this.user)){
      return
    }

    this.smsInputValue = true;
    this.startTimer()
  }

  public closeModal(status?:string):void{
    this.modalClose.emit(status) 
  }

  public smsModalClose(smsCode:string):void{
    // this.smsValidationModal = false;
    smsCode ? this.smsCode = smsCode : '';
    smsCode ? this.registationFinish() : '';
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

  public checkSmsCode():void{
    let smsCodeStatus = true

    if(smsCodeStatus && this.user.smsCode.length == 4){
      this.registationFinish()
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

  private registationFinish():void{
    
    this.user.giftItemId = this.Id;
    this.user.smsCode = this.smsCode;
    this.smsInputValue = false;

    this.presendetgiftsService.giftRegistration(this.user).subscribe({
      next: (res:any) => {
        let successMessage = 'თქვენ მონაწილეობთ გაჩუქებაში';
        let status = '200'
        this.growlService.showSuccessAnimation(successMessage);
        this.closeModal(status);
      },
      error:(error:any) => {
        let errorMesage = error.error.text;
        this.growlService.showErrorAnimation(errorMesage);
        clearInterval(this.smsTimer)
      }
    })
    
  }

  private startTimer(){
    let timer = 59;

    this.smsTimer = setInterval(() => {
      console.log(timer)

      if(timer == 0){
        clearInterval(this.smsTimer)
        this.smsInputValue = false;
        let error = 'დრო ამოიწურა, საცადე ახალი სმს კოდი!!!';
        this.growlService.showErrorAnimation(error);
      }

      timer--

    }, 1000);

  }

}
