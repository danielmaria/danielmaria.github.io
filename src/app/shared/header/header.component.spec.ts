import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['get'])
    
    await TestBed.configureTestingModule({

      declarations: [ HeaderComponent, TranslatePipe ],
      
      providers: [
        {provide: TranslateService, useValue: translateSpy}
     ]

    })
    .compileComponents()
    .then(() => {

      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;

    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
