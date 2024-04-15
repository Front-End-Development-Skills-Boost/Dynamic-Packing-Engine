import { ProductService } from './../../../service/productService';
import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ItemsService } from '../../../service/itemsService';
import { SelectItemGroup } from 'primeng/api';
import { Product } from 'domain/product';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {

  // 選單
  items: MegaMenuItem[] | undefined;
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
  children: number = 2;
  total:number =this.adult+this.children;
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

  //order順序
  selectOrder: any[] = [];
  orderType: any[] = [
    { name: 'Popular' },
    { name: 'Cheapest' },
    { name: 'Best' },
    { name: 'rated' }
  ];
  //page一頁筆數
  selectPage: any[] = [];
  page: any[] = [
    { name: 10 },
    { name: 16 },
    { name: 24 }
  ];
  //hotels搜尋結果
  products!: Product[];

  constructor(private itemsService: ItemsService, private productService: ProductService) {


  }

  ngOnInit() {
    // 選單
    this.itemsService.getItems().then((items) => {
      this.items = items;
    });
    // hotels搜尋結果
    this.productService.getProducts().then((data) => (this.products = data));

  }
 
}
