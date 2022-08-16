import { Component, OnInit } from '@angular/core';
import { CarsInfoService } from 'src/app/services/cars-info.service';
import { Car } from 'src/app/services/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  // TODO: in production, inject CarsInfoService
  constructor(public carsService: CarsInfoService) { }

  ngOnInit(): void {
    // this.carsService.getCarsInfoObservable().subscribe(cars => {
    //   console.log(cars);
    //   this.cars = cars;
    // });

    this.carsService.getCarsInfoSubject().subscribe(cars => {
      // console.log(cars);
      this.cars = cars;
    });
  }

}
