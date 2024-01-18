import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({
      duration: 750,
      delay: 150,
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }
}
