import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { NavbarModule } from './navbar/navbar.module';
import { SlideModule } from './slide/slide.module';
import { AboutUsModule } from './about-us/about-us.module';
import { PartnerModule } from './partner/partner.module';
import { FooterModule } from './footer/footer.module';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,

    NavbarModule,
    SlideModule,
    AboutUsModule,
    PartnerModule,
    FooterModule,

    AppRoutingModule,
    FontAwesomeModule,
    NgxCarouselModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
