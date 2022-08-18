import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs, Firestore, limit, query, orderBy, updateDoc, doc, getDoc, where } from '@angular/fire/firestore';
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
  db: Firestore = getFirestore();
  updateApiRequest: Subject<boolean> = new BehaviorSubject<boolean>(false);
  carsInfo: Subject<Car[]> = new BehaviorSubject<Car[]>([]);
  // mockUrl: string = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) {
    this.getCarsInfo();
    // this.getMockCarsInfo();
  }

  async getCarsInfo() {
    let cars: any = [];
    
    // query the first page of cars
    // reference: https://firebase.google.com/docs/firestore/query-data/query-cursors#web-version-9

    const first = query(collection(this.db, 'cars'), orderBy('price', 'asc'), limit(3));
    const carsInfo = await getDocs(first);
    carsInfo.forEach(car => {
      cars.push(car.data());
    });
    
    console.log(cars.length);
    this.carsInfo.next(cars);
  }

  /**
   * set the cars subject array according to filter conditions and sort conditions
   * set the updateApiRequest subject to false to indicate data update is not from API
   * @see SidebarComponent for how data is updated
   * @param cars 
   */
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

  async updateCarClickCount(car: Car) {
    // update the car's clicks count
    isNaN(car.clicks) ? car.clicks = 1 : car.clicks++;

    // get the car's document reference from firestore
    const docRef = doc(this.db, 'cars', `${car.id}`);
    const docSnap = await getDoc(docRef);

    // update the car's clicks count in firestore
    if (docSnap.exists()) {
      await updateDoc(docRef, {clicks: car.clicks});
    } else {
      console.log('car not found');
    }
  }

  // the mock api using httpClient and json-server

  // updateCarClickCount(car: Car) {
  //   car.clicks++;
  //   return this.httpClient.put<Car>(`${this.mockUrl}/${car.id}`, car, headerOptions);
  // }

  // getMockCarsInfo() {
  //   this.updateApiRequest.next(true);
  //   this.httpClient.get<Car[]>(this.mockUrl, headerOptions).subscribe(data => {
  //     this.carsInfo.next(data);
  //   });
  // }
}
