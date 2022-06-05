import { HoursAvgPipe } from './../../shared/pipe/hours-avg/hours-avg.pipe';
import { By } from '@angular/platform-browser';
import { Course } from './../../interfaces/course';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        HoursAvgPipe
      ],
      }).compileComponents()
      .then(() => {
          fixture = TestBed.createComponent(CoursesComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort asc by date', () => {

    component.courses = courses;
    fixture.detectChanges();
    const coursesElements = el.queryAll(By.css(".course-title"));

    expect(coursesElements?.length).toBe(courses.length);
    debugger
    expect(coursesElements[0].nativeElement.textContent).toBe("3")
    expect(coursesElements[1].nativeElement.textContent).toBe("4")
    expect(coursesElements[2].nativeElement.textContent).toBe("2")
    expect(coursesElements[3].nativeElement.textContent).toBe("1")
  })

});

const courses: Course[] = [
    {
       title:"3",
       date: new Date("2022-04-08"),
       duration: 1,
       company:"company3",
       certification:"test3"
    },
    {
      title:"4",
      date: new Date("2021-04-30"),
      duration: 2,
      company:"company4",
      certification:"test4"
    },
    {
       title:"2",
       date: new Date("2020-04-10"),
       duration:3,
       company:"company2",
       certification:"test2"
    },
    {
       title:"1",
       date:new Date("2019-06-22"),
       duration:4,
       company:"company1",
       certification:"test1"
    }
]