import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly', // true | canFly
})
export class canFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Puede Volar' : 'No puede volar';
  }
}
