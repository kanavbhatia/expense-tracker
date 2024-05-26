import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js';  // Import zone.js to handle async operations

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err:any) => console.error(err));
