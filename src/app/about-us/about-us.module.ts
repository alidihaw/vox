import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutUsComponent } from './about-us.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,

    FontAwesomeModule,
  ],
  exports: [
    AboutUsComponent
  ],
  providers: [],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }
