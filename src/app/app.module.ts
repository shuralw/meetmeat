import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';
import { BratwurstproComponent } from './bratwurstpro/bratwurstpro.component';
import { CardComponent } from './card/card.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';


const cookieConfig: NgcCookieConsentConfig = {
  "cookie": {
    "domain": "meetmeat-b5332.web.app",
  },
  "position": "top",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#64bc45",
      "text": "#000000",
      "border": "transparent"
    }
  },
  "type": "opt-in",
  "content": {
    "message": "Diese Website verwendet Cookies. Durch das Klicken auf \"Akzeptieren\" akzeptieren Sie die Verwendung von Cookies.",
    "dismiss": "Akzeptieren",
    "deny": "Verweigern",
    "link": "Mehr Infos",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
}

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    UeberunsComponent,
    BratwurstproComponent,
    CardComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
