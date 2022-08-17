import { CarsInfoService } from '../../services/cars-info.service';
import { CarsSorterService } from './../../services/cars-sorter.service';
import { Router } from '@angular/router';
// import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../services/car.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  cars: Car[] = [];

  // TODO: in production, inject AuthService
  constructor(router: Router,
              private carsService: CarsInfoService,
              private carsSorterService:CarsSorterService) {
    // if (this.auth.getUser() === null || this.auth.getUser() === undefined) {
    //   router.navigate(['/auth']);
    // }
  }

  ngOnInit(): void {
    this.carsService.getCarsInfoSubject().subscribe(cars => {
      this.cars = cars;
    });
  }

  sortBy(sortMethod: any) {
    console.log(sortMethod);
    switch (sortMethod) {
      case '依價格低到高排序':
        this.cars = this.carsSorterService.sortByPrice(this.cars);
        this.carsService.setCarsInfoSubject(this.cars);
        break;
      case '依價格高到低排序':
        this.cars = this.carsSorterService.sortByPrice(this.cars).reverse();
        this.carsService.setCarsInfoSubject(this.cars);
        break;
      case '依瀏覽次數高到低排序':
        this.cars = this.carsSorterService.sortByViews(this.cars);
        this.carsService.setCarsInfoSubject(this.cars);
        break;
      default:
        this.cars = this.carsSorterService.sortByViews(this.cars);
        this.carsService.setCarsInfoSubject(this.cars);
    }
  }
}
