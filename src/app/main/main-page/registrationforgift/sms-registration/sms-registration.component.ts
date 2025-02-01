import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sms-registration',
  templateUrl: './sms-registration.component.html',
  styleUrl: './sms-registration.component.scss'
})
export class SmsRegistrationComponent {
  @Output() modalClose = new EventEmitter<string>();

  public smsCode!:string;

  private smsTimer!:any

  ngOnInit() { 
    this.startTimer();
  }

  public closeModal(){
    this.modalClose.emit();
  }

  public keyupSmsCode():void{
    if(this.smsCode.length == 4){
      this.modalClose.emit(this.smsCode)
    }
  }

  private startTimer(){
    let timer = 60;

    this.smsTimer = setInterval(() => {

      if(timer == 0){
        this.modalClose.emit() 
      }

      timer--

    }, 1000);

  }

  ngOnDestroy(){
    this.smsTimer ? clearInterval(this.smsTimer) : '';
  }
}
