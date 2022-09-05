import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Car } from '../../services/car.model';
import { CarsFilterService } from '../../services/cars-filter.service';
import { CarsInfoService } from '../../services/cars-info.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  mileage = this.fb.group({
    topOne: false,
    topFive: false,
    topTen: false,
    topFifteen: false,
    topTwenty: false,
    topThirty: false,
    thirtyOrMore: false
  });

  year = this.fb.group({
    topFour: false,
    topNine: false,
    tenOrMore: false
  });

  displacement = this.fb.group({
    topOne: false,
    topOneSix: false,
    topOneEight: false,
    topTwo: false,
    topTwoFour: false,
    topThreeFive: false,
    threeFiveOrMore: false
  });

  fuel = this.fb.group({
    gasoline: false,
    diesel: false,
    hybrid: false,
    gas: false,
    electric: false
  });

  color = this.fb.group({
    black: false,
    white: false,
    sliver: false,
    blue: false,
    red: false,
    yellow: false,
    others: false
  });

  door = this.fb.group({
    two: false,
    three: false,
    four: false,
    five: false,
    six: false
  });

  seats = this.fb.group({
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eightOrMore: false,
  });

  district = this.fb.group({
    north: false,
    south: false,
    east: false,
    center: false,
  });

  gearbox = this.fb.group({
    manual: false,
    automatic: false,
    semiAutomatic: false,
    semiManual: false,
    CVT: false,
  });

  checkboxGroupForm = this.fb.group({
    mileage: this.mileage,
    year: this.year,
    displacement: this.displacement,
    fuel: this.fuel,
    color: this.color,
    door: this.door,
    seats: this.seats,
    district: this.district,
    gearbox: this.gearbox
  });

  cars: Car[] = [];
  savedCars: Car[] = []; // for filter purpose, only update the cars array when the api request is true
  apiRequest: boolean = false;

  constructor(private fb: FormBuilder,
              private carsService: CarsInfoService,
              private carsFilterService: CarsFilterService) {
    this.carsService.getUpdateApiRequest().subscribe(request => {
      this.apiRequest = request;
    });

    this.carsService.getCarsInfoSubject().subscribe(cars => {
      this.cars = cars;

      if (this.apiRequest) {
        this.savedCars = cars;
      }
    });
  }

  ngOnInit(): void {
    this.checkboxGroupForm.valueChanges.subscribe(form => {
      console.log(form);
      
      let filters = [this.carsFilterService.filterMileage,
                        this.carsFilterService.filterYear,
                        this.carsFilterService.filterDisplacement,
                        this.carsFilterService.filterFuel,
                        this.carsFilterService.filterColor,
                        this.carsFilterService.filterDoor,
                        this.carsFilterService.filterSeat,
                        this.carsFilterService.filterDistrict,
                        this.carsFilterService.filterGearbox];
      // reduce filters
      // apply each filter with previous calculated result and pass to next filter
      let result = filters.reduce((acc, curr) => {
        return curr(form, acc);
      } , this.savedCars);

      console.log(result);
      this.carsService.setCarsInfoSubject(result);
    });
  }
}
