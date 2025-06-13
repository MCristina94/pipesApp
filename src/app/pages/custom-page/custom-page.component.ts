import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes';
import { canFlyPipe } from '../../pipes/canFly.pipe';
import { heroColorPipe } from '../../pipes/heroColor.pipe';
import { heroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { heroCreatorPipe } from '../../pipes/creator.pipe';
import { heroSortByPipe } from '../../pipes/hero-sort.pipe';
import { Hero } from '../../interfaces/hero.interfaces';
import { heroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    toggleCasePipe,
    canFlyPipe,
    heroColorPipe,
    heroTextColorPipe,
    TitleCasePipe,
    heroCreatorPipe,
    heroSortByPipe,
    heroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Maureen Cristina');
  upperCase = signal(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('');

  toggleCaseBtn() {
    this.upperCase.set(!this.upperCase());
  }
}
