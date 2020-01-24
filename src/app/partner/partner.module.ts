import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PartnerComponent } from './partner.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    PartnerComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,

    FontAwesomeModule,
    NgxCarouselModule,
  ],
  exports: [
    PartnerComponent
  ],
  providers: [],
  bootstrap: [PartnerComponent]
})
export class PartnerModule { }
