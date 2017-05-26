import { TestBed, inject } from '@angular/core/testing';

import { GtmIdService } from './gtm-id.service';

describe('GtmIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GtmIdService]
    });
  });

  it('should ...', inject([GtmIdService], (service: GtmIdService) => {
    expect(service).toBeTruthy();
  }));
});
