import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule, linkedin, instagram, github, filePdf } from 'ngx-bootstrap-icons';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './components/courses/courses.component';
import { HoursAvgPipe } from './shared/pipe/hours-avg/hours-avg.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PdfViewerComponent } from './shared/pdf-viewer/pdf-viewer.component';

const icons = {
  linkedin, instagram, github, filePdf
};
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HoursAvgPipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    PdfViewerComponent
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
    NgbModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}