import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes';
import { canFlyPipe } from '../../pipes/canFly.pipe';
import { heroColorPipe } from '../../pipes/heroColor.pipe';
import { heroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { heroCreatorPipe } from '../../pipes/creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    toggleCasePipe,
    canFlyPipe,
    heroColorPipe,
    heroTextColorPipe,
    TitleCasePipe,
    heroCreatorPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Maureen Cristina');
  upperCase = signal(true);
  heroes = signal(heroes);

  toggleCaseBtn() {
    this.upperCase.set(!this.upperCase());
  }
}
