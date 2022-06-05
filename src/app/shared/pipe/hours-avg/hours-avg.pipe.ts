import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursAvg'
})
export class HoursAvgPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return Math.round(value/60);
  }

}
