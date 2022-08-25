import { TestBed } from '@angular/core/testing';

import { CarsInfoService } from './cars-info.service';

describe('CarsInfoService', () => {
  let service: CarsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
