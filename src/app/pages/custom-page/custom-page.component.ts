import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes';

@Component({
  selector: 'app-custom-page',
  imports: [toggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Maureen Cristina');
  upperCase = signal(true);

  toggleCaseBtn() {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes);
}
