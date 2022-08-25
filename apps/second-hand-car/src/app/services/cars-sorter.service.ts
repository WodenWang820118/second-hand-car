import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsSorterService {

  constructor() {
  }

  sortByPrice(cars: Car[]): Car[] {
    return cars.sort((a, b) => {
      return Number(a.price) - Number(b.price);
    });
  }

  sortByViews(cars: Car[]): Car[] {
    return cars.sort((a, b) => {
      return Number(a.clicks) - Number(b.clicks);
    }).reverse();
  }
}
