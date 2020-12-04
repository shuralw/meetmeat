import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';
import { BratwurstproComponent } from './bratwurstpro/bratwurstpro.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    UeberunsComponent,
    BratwurstproComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
