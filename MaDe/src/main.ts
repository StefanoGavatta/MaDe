import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent,  {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes) // Se utilizzi il routing
    // Aggiungi qui altri providers specifici della tua applicazione
  ]
}).catch(err => console.error(err));