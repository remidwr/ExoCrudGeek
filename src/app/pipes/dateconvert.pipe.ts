import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateconvert'
})
export class DateconvertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
