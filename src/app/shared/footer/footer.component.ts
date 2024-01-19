import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  date = new Date();

  ngOnInit(): void {
    Aos.init({
      duration: 750,
      delay: 150,
    });
  }
}
