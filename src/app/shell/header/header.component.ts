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

  constructor(){}
}
