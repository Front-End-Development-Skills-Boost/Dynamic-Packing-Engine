import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ItemsService } from '../../../service/itemsService';
import { SelectItemGroup } from 'primeng/api';
import { Product } from 'domain/product';
import { ProductService } from 'service/productService';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
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
  children: number = 0;
  total: number = this.adult + this.children;
  //sidebar
  sidebarVisible: boolean = false;
  //Budget
  Budget: number = 30000;
  //Hotel Check
  Check: number = 80;
  //stars
  stars: number = 5;
  //Amenities
  selectedCategories: any[] = [];
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  //Amenities
  selectOrder: any[] = [];
  orderType: any[] = [
    { name: 'Cheapest' },
    { name: 'Accounting' }
  ];
  //搜尋結果
  products!: Product[];

  constructor(private productService: ProductService) {


  }

  ngOnInit() {
    //搜尋結果
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }
}
