
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { PhotoService } from '../../../service/photoservice';
import { DepartureAirportService } from '../../../service/departureAirportService';
import { ItemsService } from '../../../service/itemsService';
import { SelectItemGroup } from 'primeng/api';
import { DestinationService } from 'service/destinationService';


interface City {
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
  nodes!: any[];
  selectedNodes: any;
  //destination and hotel
  groupedCities!: SelectItemGroup[];
  selectedCities!: City[];
  // Date Range
  rangeDates: Date[] | undefined;
  // count of customer
  adult: number = 2;
  children: number = 4;
  total: number = this.adult + this.children;




  constructor(private destinationService: DestinationService, private photoService: PhotoService, private departureAirportService: DepartureAirportService) {
    //departureAirport
    this.departureAirportService.getFiles().then((files) => (this.nodes = files));
    //destination and hotel
    this.destinationService.getDestinations().then((destinations) => (this.groupedCities = destinations));

  }

  ngOnInit() {
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
