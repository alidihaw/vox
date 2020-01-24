import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,

    FontAwesomeModule,
  ],
  exports: [
    FooterComponent
  ],
  providers: [],
  bootstrap: [FooterComponent]
})
export class FooterModule { }
