import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../shared/ScrollService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSideBySide: boolean = false;

  constructor(private scrollService: ScrollService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isSideBySide = scrollPosition > 0;
  }
}
