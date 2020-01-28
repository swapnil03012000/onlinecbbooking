import { TestBed, inject } from '@angular/core/testing';

import { CabService } from './cab.service';

describe('CabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CabService]
    });
  });

  it('should be created', inject([CabService], (service: CabService) => {
    expect(service).toBeTruthy();
  }));
});
