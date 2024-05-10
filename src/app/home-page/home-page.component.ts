
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { PhotoService } from '../../../service/photoservice';
import { SelectItemGroup } from 'primeng/api';
import { DestinationService } from 'service/destinationService';


interface City {
  name: string,
  code: string
}
interface Country {
  name: string,
  code: string
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // 圖片旋轉
  images: any[] | undefined;
  responsiveOptions: any[] | undefined;
  //departureAirport
  countries!: Country[];
  selectedCountry!: Country;
  cities!: City[];
  selectedCity!: City;
  //destination and hotel
  groupedCities!: SelectItemGroup[];
  selectedCities!: City[];
  // Date Range
  rangeDates: Date[] | undefined;
  // count of customer
  adult: number = 2;
  children: number = 4;
  total: number = this.adult + this.children;




  constructor(private destinationService: DestinationService, private photoService: PhotoService) {
   
    //destination and hotel
    this.destinationService.getDestinations().then((destinations) => (this.groupedCities = destinations));

  }

  ngOnInit() {
    //機加酒選單
    // departure airport
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
  ];
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
    // 圖片旋轉
    this.photoService.getImages().then((images) => {
      this.images = images;
    });
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

  }
}
