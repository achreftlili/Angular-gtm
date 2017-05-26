import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { GtmIdService } from './gtm-id.service';
import { GtmTrackerService } from './gtm-tracker.service';

declare var dataLayer: any;

@Injectable()
export class GtmHandlerService {

  constructor(private _gtmIdService :GtmIdService,private _gtmTrackerService :GtmTrackerService, @Inject(DOCUMENT) private _document) {

  // subsribe the buttonTrack Events
    this._gtmTrackerService.buttonTrack.subscribe((event: any) => this.buttonEventHandler(event));
   }

  /**
   * Inititialize the Tag Manager
   *
   */
  initTagManager() {
    // Initialize to FR
    let countryCode = 'FR';
    this._gtmIdService.getGtmIdByCountryCode(countryCode).subscribe(
      (gtmId) => {
        if(gtmId){
          this.integrateScript(gtmId);
        }
      },
      (error) => {
          console.info('Error in Script integration');
      }
    );
  }

  /**
   * Append Script to the template
   *
   */
  integrateScript(gtmId) {
    let gtmScriptElement = document.createElement('script');
    gtmScriptElement.type = 'text/javascript';
    gtmScriptElement.text = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" + gtmId + "');";
    let noScriptElement = document.createElement('noscript');

    let iframe = document.createElement("iframe");
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    iframe.src = '//www.googletagmanager.com/ns.html?id=' + gtmId + ' ';
    noScriptElement.appendChild(iframe);

    this._document.body.insertBefore(gtmScriptElement, this._document.body.firstChild);
    this._document.body.insertBefore(noScriptElement, this._document.body.firstChild);
  }

  /**
   * The Handler of the Buttons click events
   *
   */
  buttonEventHandler(event) {
    /**
     * Check if the DataLayer exist
     */
    if (typeof dataLayer !== 'undefined' && dataLayer) {
      dataLayer.push(event);
    }
  }
}
