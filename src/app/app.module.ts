import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormEntryModule } from '../../dist/ngx-formentry';

import { AppComponent } from './app.component';
import { AdService } from '../../dist/ngx-formentry';
import { AmpathAdService } from './ampath-ad.service';
import { ADynamicComponentFactory } from './a-dynamic-component.factory';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { RandomDataService } from './random-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroProfileComponent,
    HeroJobAdComponent
  ],
  entryComponents: [HeroProfileComponent,HeroJobAdComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormEntryModule, ReactiveFormsModule
  ],
  providers: [
    ADynamicComponentFactory,
    RandomDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
