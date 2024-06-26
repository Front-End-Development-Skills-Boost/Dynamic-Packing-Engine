import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ItemsService } from '../../../service/itemsService';
import { MenuItem } from 'primeng/api';
import { PhotoService } from 'service/photoservice';
import { ProductService } from 'service/productService';
import { Product } from 'domain/product';

@Component({
  selector: 'app-ticket-and-hotel',
  templateUrl: './ticket-and-hotel.component.html',
  styleUrls: ['./ticket-and-hotel.component.scss']
})

export class TicketAndHotelComponent implements OnInit {

  // 選單
  items: MegaMenuItem[] | undefined;
  //麵包屑
  breadcrumb: MenuItem[] | undefined;
  //stars
  stars: number = 5;
  //照片輪播
  images: any[] | undefined;
  responsiveOptions: any[] | undefined;
  //Amenities彈窗
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  //動態選擇旅行天數 出發機場 日期
  products!: Product[];
  //是否直飛
  stateOptions: any[] = [{ label: 'Off', value: 'off' }, { label: 'On', value: 'on' }];
  value: string = 'off';
  value2!: number;
  paymentOptions: any[] = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 }
  ];
 //Continue彈窗
 visible2: boolean = false;
 showDialog2() {
   this.visible2 = true;
 }
 Luggage!: string;

  constructor(private itemsService: ItemsService, private photoService: PhotoService, private productService: ProductService) {
  }

  ngOnInit() {
    // 選單
    this.itemsService.getItems().then((items) => {
      this.items = items;
    });

    //麵包屑
    this.breadcrumb = [{ label: 'Home', url: "https://www.lufthansaholidays.com/en-de" }, { label: 'Portals Nous', url: "https://www.lufthansaholidays.com/en-de/search?t=package&los=3-7&dd=2024-04-11&rd=2025-09-07&edd=0&erd=0&travellers=25%2C25&category=3&minp=1&maxp=-1&perPage=10&page=1&recommendation=70&cur=EUR&dest=69233" },
    { label: 'Hotel details' }, { label: 'Extras' }, { label: 'Payment details' }];

    //照片輪播
    this.photoService.getImages().then((images) => (this.images = images));
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
    //動態選擇旅行天數 出發機場 日期
    this.productService.getProducts().then((data) => (this.products = data));
  }



}
