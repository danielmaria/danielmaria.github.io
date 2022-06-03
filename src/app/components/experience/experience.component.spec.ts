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
      declarations: [ ExperienceComponent ]
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

    const experienceElement = el.query(By.css(".experience-element")),
          location = experienceElement.query(By.css(".experience-location")),
          date = experienceElement.query(By.css(".experience-date")),
          position = experienceElement.query(By.css(".experience-position"));

    expect(experienceElement).toBeTruthy();
    expect(location.nativeElement.textContent).toBe(stabExperience.location);
    expect(date.nativeElement.textContent).toBe(stabExperience.date);
    expect(position.nativeElement.textContent).toBe(stabExperience.position);
  })

  it('should show project', () => {
    component.experience = stabExperience;
    fixture.detectChanges();

    const topicElement = el.query(By.css(".experience-project")),
          title = topicElement.query(By.css(".project-title")),
          topics = topicElement.queryAll(By.css(".project-topic"));

    expect(topicElement).toBeTruthy();
    expect(title.nativeElement.textContent).toBe(stabExperience.projects[0].title);
    expect(topics.length).toBe(stabExperience.projects[0].topics.length);
  })
});

const stabExperience: Experience = {
  date:"Jun 2016 - Feb 2018",
  location:"Pontifical Catholic University of Rio Grande do Sul (PUCRS)",
  position:"Software Developer",
  projects: [
      {
        title:"Development and maintenance of internal projects:",
        topics: [
            "Analysis, development and maintenance of Java systems (JPA [Hibernate], EJB, JSF, RichFaces, Spring Framework, Servlets and JSP) using Oracle as database, JBoss and Tomcat as application servers, and SVN as version control tool;",
            "Analysis, development and maintenance of database routines with Oracle PL/SQL;",
            "Create and execute test cases in JUnit for unit testing;",
            "Develop automated reports and forms, using Jasper Reports."
        ]
      }
  ]
}