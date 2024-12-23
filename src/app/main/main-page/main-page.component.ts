import { Component } from '@angular/core';
import { PresendetgiftsService } from '../service/presendetgifts.service';
import { IMAGE_PATHS } from '../../shared/utils';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  public isModalOpen = false;

  private image = IMAGE_PATHS
  
  //გაჩუქებული საჩუქრები
  public PresentedgiftsArr:any = []

  public currentGifts:any = [
    {
      id:1,
      imageBase64: `${this.image}/4.png`,
      giftName: 'თოვლის ბაბუ',
      description:'40 სანტიმეტრიანი თოვლის ბაბუ საახალწლო განწყობისტვის',
      giver: 'გააჩუქეს გვერდი',
      startDate: '2024-12-20'
    },
    {
      id:2,
      imageBase64: `${this.image}/2.png`,
      giftName: 'ქოლგა',
      description:'ქოლგა, წვიმიანი ამინდებისთვის',
      giver: 'გააჩუქეს გვერდი',
    }
  ]

  constructor(
    private presendetgiftsService: PresendetgiftsService,
  ) {}

  ngOnInit() {
    this.getPresentedgifts()
  }

  public getPresentedgifts(){

    let sendObject = {
      Raodenoba: 1,
      isActive: true
    }
    
    this.presendetgiftsService.getGiftedItems(sendObject).subscribe({
      next: (res) => {
        this.PresentedgiftsArr = res
      }
    })
  }

  public registrationModal(): void {
    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.isModalOpen = false;
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

}
