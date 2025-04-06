import {ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { lastValueFrom } from 'rxjs';
import { InitService } from './core/services/init.service';
import { authInterceptor } from './core/interceptors/auth.interceptor';

function initializeApp() {
  let initService=inject(InitService);
  return lastValueFrom(initService.init()).finally(() => {
    const splash = document.getElementById('initial-splash');
    if (splash) {
      splash.remove();
    }
  })
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([errorInterceptor, loadingInterceptor,authInterceptor])),
    provideAppInitializer(initializeApp)
  ]
};
