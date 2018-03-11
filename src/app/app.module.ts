import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PhotographyPortfolioComponent } from './portfolio/photography-portfolio/photography-portfolio.component';

@NgModule({
    declarations: [
        AppComponent,
        PortfolioComponent,
        PhotographyPortfolioComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
