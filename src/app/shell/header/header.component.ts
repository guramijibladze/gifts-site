import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled:boolean = false

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollableHeight) * 100;

    // თუ სქროლის პროცენტი 30%-ზე მეტია
    this.isScrolled = scrollPercentage > 10;
  }

  scrollToGifItems(id:string, scrollPostion:number){
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop; // ელემენტის ზედა პოზიცია
      const offsetPosition = elementPosition + scrollPostion;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // გლუვი სქროლვა
      });
    }
  }

  scrollToAbout(id:string, scrollPostion:number){
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop; // ელემენტის ზედა პოზიცია
      const offsetPosition = elementPosition + scrollPostion;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // გლუვი სქროლვა
      });
    }
  }

  scrollToFooter(id:string){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToGStartPage(id:string):void{
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  constructor(){}
}
