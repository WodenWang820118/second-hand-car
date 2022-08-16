import { TestBed } from '@angular/core/testing';

import { CarsFilterService } from './cars-filter.service';

describe('CarsFilterService', () => {
  let service: CarsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
