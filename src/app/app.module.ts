import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GtmIdService } from './services/gtm-id.service';
import { GtmHandlerService } from './services/gtm-handler.service';
import { GtmTrackerService } from './services/gtm-tracker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GtmHandlerService, GtmTrackerService, GtmIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
