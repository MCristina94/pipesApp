import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase', // 'fernando' | toggleCase
  //'fernando' es el value,  los argumentos (...arg)  son arreglos de argumentos
})
export class toggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean = true): string {
    //'fernando' es el value,  los argumentos (...arg)  son arreglos de argumentos
    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
