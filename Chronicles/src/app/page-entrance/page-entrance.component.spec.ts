import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEntranceComponent } from './page-entrance.component';

describe('PageEntranceComponent', () => {
  let component: PageEntranceComponent;
  let fixture: ComponentFixture<PageEntranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEntranceComponent]
    });
    fixture = TestBed.createComponent(PageEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
