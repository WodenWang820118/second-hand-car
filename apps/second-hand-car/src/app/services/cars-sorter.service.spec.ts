import { TestBed } from '@angular/core/testing';

import { CarsSorterService } from './cars-sorter.service';

describe('CarsSorterService', () => {
  let service: CarsSorterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsSorterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
