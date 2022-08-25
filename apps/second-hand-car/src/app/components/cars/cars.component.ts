import { Component, OnInit } from '@angular/core';
import { CarsInfoService } from '../../services/cars-info.service';
import { Car } from '../../services/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(public carsService: CarsInfoService) { }

  ngOnInit(): void {
    this.carsService.getCarsInfoSubject().subscribe(cars => {
      console.log(cars);
      this.cars = cars;
    });
  }
}
