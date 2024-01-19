import { Experience } from './../../interfaces/experience';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { By } from '@angular/platform-browser';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show experience', () => {
    component.experience = stabExperience;
    fixture.detectChanges();

    const experienceElement = el.query(By.css('.experience-element')),
      location = experienceElement.query(By.css('.experience-location')),
      date = experienceElement.query(By.css('.experience-date')),
      position = experienceElement.query(By.css('.experience-position'));

    expect(experienceElement).toBeTruthy();
    expect(location.nativeElement.textContent).toBe(stabExperience.location);
    expect(date.nativeElement.textContent).toBe(stabExperience.date);
    expect(position.nativeElement.textContent).toBe(stabExperience.position);
  });

  it('should show project', () => {
    component.experience = stabExperience;
    fixture.detectChanges();

    const topicElement = el.query(By.css('.experience-project')),
      title = topicElement.query(By.css('.project-title')),
      description = topicElement.queryAll(By.css('.main-responsabilities'));

    expect(topicElement).toBeTruthy();
    expect(title.nativeElement.textContent).toBe(
      stabExperience.projects![0].title
    );
    expect(description.length).toBe(
      stabExperience.projects![0].description!.length
    );
  });
});

const stabExperience: Experience = {
  date: 'Jun 2016 - Feb 2018',
  location: 'PUCRS',
  position: 'Java Developer',
  projects: [
    {
      title: 'Development and maintenance of internal projects:',
      technologies: [
        'Java 6 & 8',
        'Spring Framework 3',
        'JSF RichFaces',
        'Oracle',
        'EJB',
        'SVN',
        'JBOSS',
        'Tomcat',
      ],
      description:
        'Analysis, development, and maintenance of Java systems and database routines with Oracle PL/SQL;',
    },
  ],
  img: 'pucrs.jpeg',
};
