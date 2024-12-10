import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideLottieOptions } from 'ngx-lottie'
import { provideHttpClient } from '@angular/common/http';
import player from 'lottie-web'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideLottieOptions({
       player: () => player 
      }),
    provideHttpClient()
  ] 
};    
