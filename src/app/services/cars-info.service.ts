import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { getFirestore, collection, getDocs, Firestore, limit, query, orderBy } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { Car } from './car.model';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })}

@Injectable({
  providedIn: 'root'
})
export class CarsInfoService {
  // TODO: in production, use a real database
  // please note there's a limit for daily query quota
  // db: Firestore = getFirestore();
  updateApiRequest: Subject<boolean> = new BehaviorSubject<boolean>(false);
  carsInfo: Subject<Car[]> = new BehaviorSubject<Car[]>([]);
  mockUrl: string = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) {
    // this.getCarsInfo();
    this.getMockCarsInfo();
  }

  // TODO: in production, use a real database
  async getCarsInfo() {
    let cars: any = [];
    
    // query the first page of cars
    // reference: https://firebase.google.com/docs/firestore/query-data/query-cursors#web-version-9

    // const first = query(collection(this.db, 'cars'), orderBy('price', 'asc'), limit(10));
    // const carsInfo = await getDocs(first);
    // carsInfo.forEach(car => {
    //   cars.push(car.data());
    // });
    
    // this.carsInfo.next(cars);
  }

  // getCarsInfoObservable() {
  //   return this.carsInfo;
  // }

  getMockCarsInfo() {
    this.updateApiRequest.next(true);
    this.httpClient.get<Car[]>(this.mockUrl, headerOptions).subscribe(data => {
      this.carsInfo.next(data);
    });
  }

  setCarsInfoSubject(cars: Car[]) {
    this.updateApiRequest.next(false);
    this.carsInfo.next(cars);
  }

  getCarsInfoSubject() {
    return this.carsInfo;
  }

  getUpdateApiRequest() {
    return this.updateApiRequest;
  }

  updateCarClickCount(car: Car) {
    car.clicks++;
    return this.httpClient.put<Car>(`${this.mockUrl}/${car.id}`, car, headerOptions);
  }

}
