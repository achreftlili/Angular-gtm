import { TestBed, inject } from '@angular/core/testing';

import { GtmHandlerService } from './gtm-handler.service';

describe('GtmHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GtmHandlerService]
    });
  });

  it('should ...', inject([GtmHandlerService], (service: GtmHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
