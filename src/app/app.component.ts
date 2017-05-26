import { Component } from '@angular/core';
import { GtmHandlerService } from './services/gtm-handler.service';
import { GtmTrackerService } from './services/gtm-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private _gtmHandlerService: GtmHandlerService,
              private _gtmTrackerService: GtmTrackerService) {
    /**
     * Call the init tag manager Function to integrate gtm blocks
     */
    this._gtmHandlerService.initTagManager();
  }

  
  click(btnName) {

  /**
   * Call the trackButtonClick that will 
   * fire the event that is subscribed by the gtm-handler service
   * 
   */
    this._gtmTrackerService.trackButtonClick(btnName);
  }

}
