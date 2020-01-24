import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlideComponent } from './slide.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SlideComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,

    FontAwesomeModule,
  ],
  exports: [
      SlideComponent
  ],
  providers: [],
  bootstrap: [SlideComponent]
})
export class SlideModule { }
