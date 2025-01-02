import { Component } from '@angular/core';
import { PresendetgiftsService } from '../service/presendetgifts.service';
import { IMAGE_PATHS } from '../../shared/utils';
import { GiftedItemModel } from '../model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  public registrationModal = false;
  public giftId:number = 0;

  private image = IMAGE_PATHS;
  
  //გაჩუქებული საჩუქრები
  public PresentedgiftsArr:GiftedItemModel[] = []

  //გასაჩუქებელი საჩუქრები
  public currentGifts:GiftedItemModel[] = []

  constructor(
    private presendetgiftsService: PresendetgiftsService,
  ) {}

  ngOnInit() {
    this.getPresentedgifts();
    this.getCurrentGifts();
  }


  public openRegistrationModal(Id:number): void {
    this.registrationModal = true;
    this.giftId = Id
  }

  public closeModal(item?:any): void {
    this.registrationModal = false;
    this.getCurrentGifts()
  }

  public scrollToGift(id:string, scrollPostion:number){
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop; 
      const offsetPosition = elementPosition + scrollPostion;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' 
      });
    }
  }

  private getCurrentGifts():void{
    let sendObject = {
      Raodenoba: 1,
      isActive: true
    }

    this.presendetgiftsService.getGiftedItems(sendObject).subscribe({
      next: (res:GiftedItemModel[]) => {
        this.currentGifts = res
      }
    })
  }

  private getPresentedgifts():void{

    let sendObject = {
      Raodenoba: 1,
      isActive: false
    }
    
    this.presendetgiftsService.getGiftedItems(sendObject).subscribe({
      next: (res:GiftedItemModel[]) => {
        this.PresentedgiftsArr = res
      }
    })
  }

}
