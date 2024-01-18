import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
