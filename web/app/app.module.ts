import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { PLATFORM_PROVIDERS } from '../platform/browser';
import { ENV_PROVIDERS } from '../platform/environment';
import { ROUTES, ROUTING_PROVIDERS } from './app.routes';

// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { NoContent } from './no-content';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { MarkdownComponent } from './markdown/markdown.component';


import { Overview } from './overview/overview.component';
import { Issues } from './issues/issues.component';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    MarkdownComponent,
    NoContent,
    Overview,
    Issues
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    ButtonsModule,
    FormsModule,
    HttpModule,
    GridModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    PLATFORM_PROVIDERS,
    ENV_PROVIDERS,
    ROUTING_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
}
