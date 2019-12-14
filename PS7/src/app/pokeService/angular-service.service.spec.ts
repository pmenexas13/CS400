import { TestBed } from '@angular/core/testing';

import { AngularServiceService } from './angular-service.service';

describe('AngularServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularServiceService = TestBed.get(AngularServiceService);
    expect(service).toBeTruthy();
  });
});
