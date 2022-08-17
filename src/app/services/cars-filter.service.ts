import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsFilterService {

  constructor() { }

  public filterMileage(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // mileage filter
      let topOneRule = form.mileage?.topOne ? Number(car.mileage) < 10000 : '';
      let topFiveRule = form.mileage?.topFive ? 100000 <= Number(car.mileage) && Number(car.mileage) < 50000 : '';
      let topTenRule = form.mileage?.topTen ? 50000 <= Number(car.mileage) && Number(car.mileage) < 100000 : '';
      let topFifteenRule = form.mileage?.topFifteen ? 100000 <= Number(car.mileage) && Number(car.mileage) < 150000 : '';
      let topTwentyRule = form.mileage?.topTwenty ? 150000 <= Number(car.mileage) && Number(car.mileage) < 200000 : '';
      let topThirtyRule = form.mileage?.topThirty ? 200000 <= Number(car.mileage) && Number(car.mileage) < 300000 : '';
      let thirtyOrMoreRule = form.mileage?.thirtyOrMore ? Number(car.mileage) >= 300000 : '';

      if (form.mileage?.topOne ||
        form.mileage?.topFive ||
        form.mileage?.topTen ||
        form.mileage?.topFifteen ||
        form.mileage?.topTwenty ||
        form.mileage?.topThirty ||
        form.mileage?.thirtyOrMore) {
        return topOneRule ||
          topFiveRule ||
          topTenRule ||
          topFifteenRule ||
          topTwentyRule ||
          topThirtyRule ||
          thirtyOrMoreRule;
      }
      else {
        return car;
      }
    });
  }

  public filterYear(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // year filter
      let currentYear = new Date().getFullYear();
      let tenOrMoreRule = form.year?.tenOrMore ? currentYear - Number(car.year) > 10 : '';
      let topNineRule = form.year?.topNine ? 4 <= currentYear - Number(car.year) && currentYear - Number(car.year) < 9 : '';
      let topFourRule = form.year?.topFour ? currentYear - Number(car.year) < 4 : '';

      if (form.year?.tenOrMore || form.year?.topNine || form.year?.topFour) {
        return tenOrMoreRule || topNineRule || topFourRule;
      }
      else {
        return car;
      }
    })
  }

  public filterDisplacement(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // displacement filter
      let topOneRule = form.displacement?.topOne ? Number(car.displacement) < 1100 : '';
      let topOneSixRule = form.displacement?.topOneSix ? 1100 <= Number(car.displacement) && Number(car.displacement) < 1600 : '';
      let topOneEightRule = form.displacement?.topOneEight ? 1600 <= Number(car.displacement) && Number(car.displacement) < 1800 : '';
      let topTwoRule = form.displacement?.topTwo ? 1600 <= Number(car.displacement) && Number(car.displacement) < 2000 : '';
      let topTwoFourRule = form.displacement?.topTwoFour ? 2000 <= Number(car.displacement) && Number(car.displacement) < 2400 : '';
      let topThreeFiveRule = form.displacement?.topThreeFive ? 2400 <= Number(car.displacement) && Number(car.displacement) < 3500 : '';
      let threeFiveOrMoreRule = form.displacement?.threeFiveOrMore ? Number(car.displacement) >= 3500 : '';

      if (form.displacement?.topOne ||
        form.displacement?.topOneSix ||
        form.displacement?.topOneEight ||
        form.displacement?.topTwo ||
        form.displacement?.topTwoFour ||
        form.displacement?.topThreeFive ||
        form.displacement?.threeFiveOrMore) {
        return topOneRule ||
          topOneSixRule ||
          topOneEightRule ||
          topTwoRule ||
          topTwoFourRule ||
          topThreeFiveRule ||
          threeFiveOrMoreRule;
      }
      else {
        return car;
      }
    });
  }

  public filterFuel(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // fuel filter
      // TODO: confirm the Car.fuel property is correct
      let dieselRule = form.fuel?.diesel ? car.fuel === '柴油車' : '';
      let gasolineRule = form.fuel?.gasoline ? car.fuel === '汽油車' : '';
      let hybridRule = form.fuel?.hybrid ? car.fuel === '油電車' : '';
      let gasRule = form.fuel?.gas ? car.fuel === '瓦斯雙燃料' : '';
      let electricRule = form.fuel?.electric ? car.fuel === '純電車' : '';
      if (form.fuel?.diesel ||
        form.fuel?.gasoline ||
        form.fuel?.hybrid ||
        form.fuel?.gas ||
        form.fuel?.electric) {
        return dieselRule ||
          gasolineRule ||
          hybridRule ||
          gasRule ||
          electricRule;
      }
      else {
        return car;
      }
    });
  }

  filterColor(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // color filter
      // TODO: change color string to English version
      let blackRule = form.color?.black ? car.color === '黑色系' : '';
      let whiteRule = form.color?.white ? car.color === '白色系' : '';
      let sliverRule = form.color?.sliver ? car.color === '銀色系' : '';
      let blueRule = form.color?.blue ? car.color === '藍色系' : '';
      let redRule = form.color?.red ? car.color === '紅色系' : '';
      let yellowRule = form.color?.yellow ? car.color === '黃色系' : '';
      // TODO: it seems no others option in the dataset
      let othersRule = form.color?.others ? car.color === '其他' : '';

      if (form.color?.black ||
        form.color?.white ||
        form.color?.sliver ||
        form.color?.blue ||
        form.color?.red ||
        form.color?.yellow ||
        form.color?.others) {
        return blackRule ||
          whiteRule ||
          sliverRule ||
          blueRule ||
          redRule ||
          yellowRule ||
          othersRule;
      } else {
        return car;
      }
    });
  }

  filterDoor(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // door filter
      let twoRule = form.door?.two ? Number(car.doors) === 2 : '';
      let threeRule = form.door?.two ? Number(car.doors) === 3 : '';
      let fourRule = form.door?.two ? Number(car.doors) === 4 : '';
      let fiveRule = form.door?.two ? Number(car.doors) === 5 : '';
      let sixRule = form.door?.two ? Number(car.doors) === 6 : '';

      if (form.door?.two ||
        form.door?.three ||
        form.door?.four ||
        form.door?.five ||
        form.door?.six) {
        return twoRule || threeRule || fourRule || fiveRule || sixRule;
      }
      else {
        return car;
      }
    });
  }

  filterSeat(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // seats filter
      let twoRule = form.seats?.two ? Number(car.seats) === 2 : '';
      let threeRule = form.seats?.three ? Number(car.seats) === 3 : '';
      let fourRule = form.seats?.four ? Number(car.seats) === 4 : '';
      let fiveRule = form.seats?.five ? Number(car.seats) === 5 : '';
      let sixRule = form.seats?.six ? Number(car.seats) === 6 : '';
      let sevenRule = form.seats?.seven ? Number(car.seats) === 7 : '';
      let eightOrMoreRule = form.seats?.eightOrMore ? Number(car.seats) >= 8 : '';
      if (form.seats?.two ||
        form.seats?.three ||
        form.seats?.four ||
        form.seats?.five ||
        form.seats?.six ||
        form.seats?.seven ||
        form.seats?.eightOrMore) {
        return twoRule ||
          threeRule ||
          fourRule ||
          fiveRule ||
          sixRule ||
          sevenRule ||
          eightOrMoreRule;
      }
      else {
        return car;
      }
    });
  }

  filterDistrict(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // district filter
      // TODO: change 23 Taiwan cities to district category
      let northRule = form.district?.north ? car.city === 'north' : '';
      let southRule = form.district?.south ? car.city === 'south' : '';
      let eastRule = form.district?.east ? car.city === 'east' : '';
      let centerRule = form.district?.center ? car.city === 'center' : '';
      if (form.district?.north || form.district?.south || form.district?.east || form.district?.center) {
        return northRule || southRule || eastRule || centerRule;
      }
      else {
        return car;
      }
    });
  }

  filterGearbox(form: any, cars: Car[]): Car[] {
    return cars.filter(car => {
      // gearbox filter
      let manualRule = form.gearbox?.manual ? car.gearbox === '手排' : '';
      let automaticRule = form.gearbox?.automatic ? car.gearbox === '自排' : '';
      let semiAutomaticRule = form.gearbox?.semiAutomatic ? car.gearbox === '自手排' : '';
      let semiManualRule = form.gearbox?.semiManual ? car.gearbox === '手自排' : '';
      let CVTRule = form.gearbox?.CVT ? car.gearbox === 'cvt' : '';

      if (form.gearbox?.manual ||
        form.gearbox?.automatic ||
        form.gearbox?.semiAutomatic ||
        form.gearbox?.semiManual ||
        form.gearbox?.CVT) {
        return manualRule ||
          automaticRule ||
          semiAutomaticRule ||
          semiManualRule ||
          CVTRule;
      }
      else {
        return car;
      }
    });
  }
}
