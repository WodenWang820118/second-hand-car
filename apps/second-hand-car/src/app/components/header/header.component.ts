import { Component, ViewEncapsulation } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  brandDisplayStyle: string = '';
  typeDisplayStyle: string = ''
  searchBtnDisplayStyle: string = ''
  currItemAlphabet = '';

  // TODO: sort the brand list
  brands: string[] = [
    "Alpha Romeo", "Aston Martin", "Audi",
    "Bently", "BMW", "Bugatti", "Buick",
    "Cadillac", "Chery", "Chrysler", "Citroen", "CMC",
    "Daihatsu", "DFSK", "DS",
    "Ferrari", "Fiat", "Ford",
    "Honda", "Hyundai",
    "Infiniti", "IVECO",
    "Jaguar",
    "KIA", "Koenigsegg",
    "Lamborghini", "Land Rover", "Lotus", "Luxgen",
    "Mahindra", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Mistubishi", "Morgon",
    "Nissan",
    "Opel",
    "Pagani", "Peugot", "Porshe", "Proton",
    "Renault", "Rolls Royce",
    "SAAB", "Skoda", "Smart", "SsangYong", "Subaru", "Suzuki",
    "Tesla", "tobe", "Toyata",
    "Volkswagon", "Volvo"
  ];

  types: string[] = [
    "轎車", "跑車", "休旅車","貨車","吉普車","其他"
  ]

  constructor(private windowService: WindowService) {
    // subscribe to window resize event using observable
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      console.log(window.outerWidth);
      this.responsiveHeight();
    });
  }

  public get width() {
    return this.windowService.windowRef.outerWidth;
  }

  responsiveHeight() {
    //TODO: precise responsive height
    return this.windowService.windowRef.outerWidth <= 480 ? '55px' : '100%'; 
  }

  isFirstItem(brand: string) {
    for(let i = 0; i < this.brands.length; i++) {
      const brandLetter = brand[0].toUpperCase();
      if (brandLetter !== this.currItemAlphabet) {
        this.currItemAlphabet = brandLetter;
        return 'true';
      }
    }
    return 'false';
  }

  onBrandSelected(brandCheckbox: any, brand: any) {
    // TODO: selection for filtering
  }

  onTypeSelected(typeCheckbox: any, type: any) {
    // TODO: selection for filtering
  }

  onAccordionOpened(accordion: any) {
    if (this.windowService.windowRef.outerWidth <= 480) {
      if (accordion.id === 'cdk-accordion-child-0') {
        this.typeDisplayStyle = 'none';
        this.searchBtnDisplayStyle = 'none';
      } else if (accordion.id === 'cdk-accordion-child-1') {
        this.searchBtnDisplayStyle = 'none';
      }
    }
  }

  onAccordionClosed(accordion: any) {
    if (this.windowService.windowRef.outerWidth <= 480) {
      if (accordion.id === 'cdk-accordion-child-0') {
        this.typeDisplayStyle = '';
        this.searchBtnDisplayStyle = '';
      } else if (accordion.id === 'cdk-accordion-child-1') {
        this.searchBtnDisplayStyle = '';
      }
    }
  }
}
