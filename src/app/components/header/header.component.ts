import { Component, ElementRef, OnInit } from '@angular/core';
import carlist from 'src/assets/carlist.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  brandList = carlist.brand;
  typeList = carlist.type;
  displayCarList: string[] = [];
  displayIdx: number[] = [];
  brandSelected: string[] = [];
  typeSelected: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.brandList = this.sortList(this.brandList);
    this.displayCarList = this.brandList;
    this.displayIdx = Array.from(Array(this.brandList.length).keys()).map(x => x);
  }

  ngAfterViewInit() {
    this.setAlphabet(this.displayIdx)
  }

  sortList(carlist:string[]) {
    carlist.sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if( a == b) return 0;
      return a < b ? -1 : 1;
    })
    return carlist;
  }

  setAlphabet(displayIdx:number[]) {
    let alphabets = (<HTMLElement>this.el.nativeElement).querySelectorAll('.alphabet');
    let preAl = '', nowAl = '';
    displayIdx.forEach((idx) => {
      preAl = nowAl;
      nowAl = this.brandList[idx][0].toUpperCase();
      if (preAl !== nowAl ) {
        alphabets[idx].setAttribute('style', 'background-color:#cecece')
        alphabets[idx].innerHTML = nowAl;
      }
      if (preAl === nowAl ) {
        alphabets[idx].removeAttribute('style')
        alphabets[idx].innerHTML = '';
      }
    })
  }

  onSelect(event:any, i:number, str:string) {
    let checkbox = (<HTMLElement>this.el.nativeElement).querySelectorAll('.'+str+'-checkbox')[i];
    if (event.checked) {
      checkbox.setAttribute('style', 'background-color:#ffcc4b');
      str==='brand'? this.brandSelected.push(this.brandList[i]) :  this.typeSelected.push(this.typeList[i])
    } else {
      checkbox.setAttribute('style', 'background-color:#ffffff');
      str==='brand'? this.brandSelected = this.brandSelected.filter((brand) => brand !== this.brandList[i])
       : this.typeSelected = this.typeSelected.filter((brand) => brand !== this.typeList[i])
    }
  }

  filterCars(event:any) {
    let temp:number[] = [];
    let regex = new RegExp(event.target.value, 'gi');
    let brandCheckboxWrappers = (<HTMLElement>this.el.nativeElement).querySelectorAll('.brand-filter');
    this.brandList.forEach((car, i) => {
      if(car.match(regex)) {
        temp.push(i);
        brandCheckboxWrappers[i].setAttribute('style', 'display: flex');
      } else {
        brandCheckboxWrappers[i].setAttribute('style', 'display: none');
      }
    })
    this.displayIdx = temp;
    setTimeout(() => this.setAlphabet(this.displayIdx));
  }

}
