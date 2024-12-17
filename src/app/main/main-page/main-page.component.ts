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
  public PresentedgiftsArr:any = [
    {
      imagePath: `${this.image}/1.png`
    },
    {
      imagePath: `${this.image}/2.png`
    },
    {
      imagePath: `${this.image}/3.png`
    },
    {
      imagePath: `${this.image}/4.png`
    }
  ]

  constructor(
    private presendetgiftsService: PresendetgiftsService,
  ) {}

  ngOnInit() {
    this.getPresentedgifts()
  }

  public getPresentedgifts(){
    this.presendetgiftsService.getcomputerRooms().subscribe({
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
