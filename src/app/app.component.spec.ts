import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['addLangs', 'setDefaultLang'])
    
    await TestBed.configureTestingModule({

      declarations: [ AppComponent, TranslatePipe ],
      
      providers: [
        {provide: TranslateService, useValue: translateSpy}
     ]

    })
    .compileComponents()
    .then(() => {

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;

    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
