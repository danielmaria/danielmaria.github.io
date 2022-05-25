import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
