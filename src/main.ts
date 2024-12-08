// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config';

const bootstrap = () => {
  bootstrapApplication(AppComponent, {
    providers: [
      {
        provide: 'CONFIG', // Nome do provedor
        useValue: config,   // Valor do provedor (configuração)
      },
    ],
  }).catch((err) => console.error(err));
};

bootstrap();
