import { Course } from './../../../interfaces/course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakText'
})
export class BreakTextPipe implements PipeTransform {
  constructor() { }

  transform(value: string[], ...args: unknown[]): unknown {
    if(value) {
      return value.map(v => `<li>${v}</li>`).join("");
    }
    return null;
  }

}
