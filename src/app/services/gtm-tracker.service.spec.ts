import { TestBed, inject } from '@angular/core/testing';

import { GtmTrackerService } from './gtm-tracker.service';

describe('GtmTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GtmTrackerService]
    });
  });

  it('should ...', inject([GtmTrackerService], (service: GtmTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
