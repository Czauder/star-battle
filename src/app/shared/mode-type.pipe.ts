import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class ModeTypePipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) { return 'Character Battle'; }
    if (value === 1) { return 'Starship Battle'; }
    if (value === null || value === undefined) { return 'Battle'; }
  }
}
