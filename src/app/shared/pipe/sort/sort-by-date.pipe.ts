import { Course } from './../../../interfaces/course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: Course[]) {
    if(value) {
      return value.sort((c1, c2) => {return new Date(c2.date).getTime() - new Date(c1.date).getTime()});
    }
    return null;
  }

}
