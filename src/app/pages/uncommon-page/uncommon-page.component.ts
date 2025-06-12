import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canada',
};

const client2 = {
  name: 'Angela',
  gender: 'female',
  age: 34,
  address: 'Toronto, Canada',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18n select
  client = signal(client1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18n plural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'no tenemos dos clientes esperando',
    other: 'no tenemos # clientes esperando',
  });
  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Carlos',
    'Andres',
    'Hugo',
    'Sandra',
    'Cristina',
    'Lorena',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //key value pipe
  profile = {
    name: 'Alexis',
    age: 45,
    address: 'Toronto, Canada',
  };

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('promesa');
    }, 3500);
  });
}
