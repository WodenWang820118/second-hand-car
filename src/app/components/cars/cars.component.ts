import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars = [
      {
          "id": 1,
          "name": "BMW",
          "price": "100000",
          "description":"剛買一年左右，想換新車故便宜出售，意者請洽xxxx-xxx-xxx。",
          "year": "2018",
          "image": "assets/blue-car.svg"
      },
      {
          "id": 2,
          "name": "Audi",
          "price": "200000",
          "description":"剛買一年左右，想換新車故便宜出售，意者請洽xxxx-xxx-xxx。",
          "year": "2019",
          "image": "assets/yellow-car.svg"
      },
      {
          "id": 3,
          "name": "Mercedes",
          "price": "300000",
          "description":"剛買一年左右，想換新車故便宜出售，意者請洽xxxx-xxx-xxx。",
          "year": "2020",
          "image": "assets/red-car.svg"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
