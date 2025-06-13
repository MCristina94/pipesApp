import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroTextColor',
})
export class heroTextColorPipe implements PipeTransform {
  transform(value: Color): any {
    return ColorMap[value]; //tambien podria ser un switch
  }
}
