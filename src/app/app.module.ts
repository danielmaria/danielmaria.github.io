import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule, linkedin, instagram, github, filePdf } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreakTextPipe } from './shared/pipe/break-line/break-text.pipe';
import { CoursesComponent } from './components/courses/courses.component';
import { HoursAvgPipe } from './shared/pipe/hours-avg/hours-avg.pipe';
import { SortByDatePipe } from './shared/pipe/sort/sort-by-date.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';

const icons = {
  linkedin, instagram, github, filePdf
};
@NgModule({
  declarations: [
    AppComponent,
    BreakTextPipe,
    CoursesComponent,
    HoursAvgPipe,
    SortByDatePipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapIconsModule.pick(icons),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}