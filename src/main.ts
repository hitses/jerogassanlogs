import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app/app.component';

import { routes } from './app/app.routing';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      MarkdownModule.forRoot({
        loader: HttpClient,
      }),
    ]),
  ],
}).catch((err) => console.error(err));
