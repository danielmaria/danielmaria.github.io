import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['get'])
    
    await TestBed.configureTestingModule({

      declarations: [ HomeComponent, TranslatePipe ],
      
      providers: [
        {provide: TranslateService, useValue: translateSpy}
     ]

    })
    .compileComponents()
    .then(() => {

      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;

    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
