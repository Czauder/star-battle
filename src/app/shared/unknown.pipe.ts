import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknown',
})
export class UnknownPipe implements PipeTransform {
  public transform(value: string | number, arg: string = '💣'): string | number {
    if (value === 'unknown' || value === undefined) {
      return arg;
    }
    return value;
  }
}
