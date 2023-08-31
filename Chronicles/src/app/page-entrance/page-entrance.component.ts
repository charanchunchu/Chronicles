import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-entrance',
  templateUrl: './page-entrance.component.html',
  styleUrls: ['./page-entrance.component.scss']
})
export class PageEntranceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 2500);
  }
}
