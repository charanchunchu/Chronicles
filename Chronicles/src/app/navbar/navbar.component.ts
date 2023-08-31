import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  divWidth = 200;
  prevScrollY = 0;
  isSideBySide: boolean = false;

  constructor(private router: Router,) {}



  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > this.prevScrollY) {
      this.isSideBySide = scrollPosition > 50;
      // Scrolling down, increase width
      const maxWidth = 400; // Adjust this value to control the maximum width
      this.divWidth = Math.min(this.divWidth + (scrollPosition - this.prevScrollY), maxWidth);
    } else {
      this.isSideBySide = scrollPosition > 0;
      const minWidth = 200; // Adjust this value as needed
      this.divWidth = Math.max(this.divWidth - (this.prevScrollY - scrollPosition), minWidth);
    }

    this.prevScrollY = scrollPosition;
  }

  login() {
      this.router.navigate(['/login']);
  }
  
}
