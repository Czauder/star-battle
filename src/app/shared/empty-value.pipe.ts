import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyValue',
})
export class EmptyValuePipe implements PipeTransform {
  public transform(value: string | number, arg: string = ''): string | number {
    if (value === null || value === undefined ) { return arg; }
    return value;
  }
}
