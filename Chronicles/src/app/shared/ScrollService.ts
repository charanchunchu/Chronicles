import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPositionSubject = new BehaviorSubject<number>(0);
  scrollPosition$ = this.scrollPositionSubject.asObservable();

  updateScrollPosition(position: number) {
    this.scrollPositionSubject.next(position);
  }
}
