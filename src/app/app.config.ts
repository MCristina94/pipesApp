import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es-CO'; // se debe importar el idioma
import localFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localEs, 'es'); // se debe declarar tambien, local para español
registerLocaleData(localFr, 'fr'); //local para frances

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      // useValue: 'es', //para que la pagina este en español
      deps: [LocaleService],
      useFactory: (localservice: LocaleService) => localservice.getLocale,
    },
  ],
};
