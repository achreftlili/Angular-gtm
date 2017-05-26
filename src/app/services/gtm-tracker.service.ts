import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

const BUTTON_CLICK_EVENT = 'button-click-event';

@Injectable()
export class GtmTrackerService {

  /*
   * @Param: ({event: string, buttonName: string})
   */
  public buttonTrack: ReplaySubject<any> = new ReplaySubject(10);


  constructor() {

  }
  
  /**
   * Track the buttons Clicks by sending new object to the buttonTrack observable
   * @name trackButtonClick
   *
   * @param {string} buttonName
   */
  public trackButtonClick(btnName: string) {
    this.buttonTrack.next({
        event: BUTTON_CLICK_EVENT,
        buttonName: btnName
      });
  }

}
