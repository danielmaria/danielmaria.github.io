import { TestBed } from '@angular/core/testing';
import { Course } from './../../../interfaces/course';
import { SortByDatePipe } from './sort-by-date.pipe';

describe('SortByPipe', () => {

  let pipe: SortByDatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortByDatePipe]
    })
    pipe = TestBed.inject(SortByDatePipe);
  });


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort proparlly', () => {
    const sortCoursesByDate = pipe.transform(courses)
    expect(sortCoursesByDate?.length).toBe(courses.length);
    debugger
    expect(sortCoursesByDate[0].title).toBe("4")
    expect(sortCoursesByDate[1].title).toBe("3")
    expect(sortCoursesByDate[2].title).toBe("2")
    expect(sortCoursesByDate[3].title).toBe("1")
  })

});

const courses: Course[] = [
    {
       title:"3",
       date: new Date("2022-04-08"),
       duration: 510,
       company:"Udemy.com",
       certification:"angular13"
    },
    {
      title:"4",
      date: new Date("2022-04-30"),
      duration: 60,
      company:"SCRUMstudy",
      certification:"scrum"
    },
    {
       title:"2",
       date: new Date("2021-04-10"),
       duration:240,
       company:"Udemy.com",
       certification:"reactive"
    },
    {
       title:"1",
       date:new Date("2016-06-22"),
       duration:720,
       company:"Alura.com",
       certification:"alura_android1eclipse"
    }
]