import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,

    FontAwesomeModule,
  ],
  exports: [
      NavbarComponent
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class NavbarModule { }
