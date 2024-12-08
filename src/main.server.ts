import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

const bootstrap = () => {
  return bootstrapApplication(AppComponent, {
    providers: [
      { provide: 'CONFIG', useValue: config },  // Passar a configuração
      provideHttpClient(),  // Caso esteja utilizando HttpClient
    ]
  });
};

export default bootstrap;
