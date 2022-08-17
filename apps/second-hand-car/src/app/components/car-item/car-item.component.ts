import { CarsInfoService } from '../../services/cars-info.service';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../services/car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {
  @Input() car!: Car;

  constructor(private carsService: CarsInfoService) { }

  ngOnInit(): void {
  }

  browse() {
    // console.log(this.car);
    this.carsService.updateCarClickCount(this.car).subscribe();
  }

}
